(ns pay
  (:require [select :as select]
            [fields :as fields]
            [qr :as qr]))

(defn ^:export greet [n]
  (str "Hello from cljs, " n))

; initialize stuff
(defn init []
  (select/init)
  (fields/init)
  (qr/init))

;; initialize the HTML page in unobtrusive way
(set! (.-onload js/window) init)
