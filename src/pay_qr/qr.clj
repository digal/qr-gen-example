(ns pay-qr.qr
  (:import (com.google.zxing MultiFormatWriter
                             BarcodeFormat
                             EncodeHintType
                             client.j2se.MatrixToImageWriter)))

(defn qr-image
  [w h string]
  (let [hints {EncodeHintType/CHARACTER_SET "UTF-8"}
        mfw (new MultiFormatWriter)
        matrix (.encode mfw string BarcodeFormat/QR_CODE w h hints)
        img (MatrixToImageWriter/toBufferedImage matrix)
        output (java.io.ByteArrayOutputStream.)]
      (javax.imageio.ImageIO/write img "GIF" output)
      (.toByteArray output)))
  ;BitMatrix matrix = new MultiFormatWriter().encode(new String(data.getBytes(charset), charset), BarcodeFormat.QR_CODE, width, height, hints)

(defn qr-handler [request]
  (let [text (get (:query-params request) "text")]
    (if
      text
      {:status 200
       :headers {"Content-Type" "image/png"}
       :body (java.io.ByteArrayInputStream. (qr-image 400 400 text))}
      {:status 400
       :headers {"Content-Type" "text/plain"}
       :body "Provide `text` parameter to get a QR code!"})))
