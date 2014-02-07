(defproject pay-qr "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.1"]
                 [com.google.zxing/javase "2.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [compojure "1.1.6"]
                 [domina "1.0.3-SNAPSHOT"]]
  :plugins [[lein-ring "0.8.10"]
            [lein-deps-tree "0.1.2"]
            [lein-cljsbuild "1.0.2"]]
  :ring {:handler pay-qr.core/app}
  :cljsbuild {
    :builds [{
        :source-paths ["src-cljs"]
        :compiler {
          :output-dir "resources/public/js"
          :output-to "resources/public/js/main.js"  ; default: target/cljsbuild-main.js
          :source-map "resources/public/js/main.js.map"
          :optimizations :whitespace
          :pretty-print true}}]})
