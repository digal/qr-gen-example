(ns qr
  (:use [domina :only [by-id set-attr!]]
        [domina.events :only [listen!]])
  (:require [select :as select]
            [fields :as fields]))

(defn generate-qr! []
  (set-attr! (by-id "qr-img") "src" (str "qr?text=" (select/provider-string) (fields/fields-string))))

(defn init []
  (listen! (by-id "qr-generate") :click generate-qr!))
