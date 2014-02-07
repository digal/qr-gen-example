(ns select
  (:use [domina :only [by-id value append! attr set-text! destroy-children! remove-class! add-class!]]
        [domina.events :only [listen!]]
        [categories :only [categories]]))


;populates dropdown with options
(defn set-options!
  [ul-element ;<ul> to insert dropdown items
   items      ;items seq
   to-li      ;function to serialize item to <li> tag
   id-attr    ;function to create "id" attribute for item
   selected-handler]  ;item selected handler
    (destroy-children! ul-element)
    (doseq [item items]
      (do
        (append! ul-element (to-li item))
        (listen! (by-id (id-attr item)) :click #((selected-handler item))))))

;provider HTML stuff

(def selected-provider (atom {}))

(defn provider-id-attr [provider]
  (str "prv-" (:id provider)))

(defn provider-to-li [provider]
  (str "<li><a href=\"#\" prv-id=\"" (:id provider) "\" id=\"" (provider-id-attr provider) "\">" (:name provider) "</a></li>"))

(defn provider-selected [provider]
  ;(.log js/console (:name provider))
  (reset! selected-provider provider)
  (remove-class! (by-id "qr-generate") "disabled")
  (set-text! (by-id "provider-name") (:name provider)))

;category HTML stuff

(def selected-category (atom {}))

(defn cat-id-attr [cat]
  (str "cat-" (:id cat)))

(defn cat-to-li [cat]
  (str "<li><a href=\"#\" cat-id=\"" (:id cat) "\" id=\"" (cat-id-attr cat) "\">" (:title cat) "</a></li>"))

(defn cat-selected [cat]
  ;(.log js/console (:title cat))
  (reset! selected-category cat)
  (set-text! (by-id "category-name") (:title cat))
  (set-text! (by-id "provider-name") "Провайдер")
  (add-class! (by-id "qr-generate") "disabled")
  (set-options! (by-id "providers-list") (:providers cat) provider-to-li provider-id-attr provider-selected))

(defn provider-string []
  (str (:id @selected-category) "|" (:id @selected-provider) "|" (:clearing @selected-provider) "|"))

; initialize stuff
(defn init []
  ;; verify that js/document exists and that it has a getElementById
  ;; property
  (if (and js/document
           (.-getElementById js/document))
    ;; populate categories list
    (set-options! (by-id "categories-list") categories cat-to-li cat-id-attr cat-selected)))
