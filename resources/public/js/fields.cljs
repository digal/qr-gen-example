(ns fields
  (:use [domina :only [by-id by-class value insert-before! listen! destroy! nodes]]
        [domina.events :only [listen!]]
        [domina.css :only    [sel]]))

(defn html-for-field [num]
  (str "          <div class=\"row fields-row\" id=\"fields-" num "\">"
       "              <div class=\"col-md-1\">"
       "                  <h5>" num ".</h5>"
       "              </div>"
       "              <div class=\"col-md-4\">"
       "                  <input type=\"text\" class=\"form-control field-name\" placeholder=\"Field name\" id=\"field-name-" num "\">"
       "              </div>"
       "              <div class=\"col-md-4\">"
       "                  <input type=\"text\" class=\"form-control field-value\" placeholder=\"Field value\" id=\"field-value-" num "\">"
       "              </div>"
       "              "
       "              <div class=\"col-md-2\">"
       "                  <button type=\"button\" class=\"btn btn-default btn-md\" id=\"field-remove-" num "\">"
       "                     <span class=\"glyphicon glyphicon-trash\"></span> Remove"
       "                  </button>"
       "              </div>"
       "          </div>"))

(def last-field-num (atom 1))

(defn add-field! [evt]
  (let [num  @last-field-num
        buttons-spacer (by-id "buttons-spacer")
        html (html-for-field num)]
    (swap! last-field-num inc)
    (insert-before! buttons-spacer html)
    (listen! (by-id (str "field-remove-" num)) :click #(destroy! (by-id (str "fields-" num))))))

(defn fields-string []
  (clojure.string/join
     ";"
     (reduce
        (fn [pairs row]
          (let [field-name (value (sel row "div input.field-name"))
                field-value (value (sel row "div input.field-value"))]
            (.log js/console (str "name: " field-name))
            (conj pairs (str field-name "=" field-value))))
         []
         (nodes (by-class "fields-row")))))

(defn init []
  (listen! (by-id "field-add") :click add-field!))
