(ns pay-qr.core
  (:import (com.google.zxing MultiFormatWriter
                             BarcodeFormat
                             EncodeHintType
                             client.j2se.MatrixToImageWriter))
  (:use compojure.core)
  (:use pay-qr.qr)
  (:require [compojure.route :as route]
            [ring.util.response :as response]))

(use 'ring.middleware.params)

(defroutes app
  (GET "/qr" [] (wrap-params qr-handler))
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (route/resources "/"))



