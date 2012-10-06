(ns session.ui)

;;"dX9GTUMh490"

(defn youtube [x]
 #hiccup [:iframe {:width "420" :height "315"
            :src  (str "http://www.youtube.com/embed/" x "?rel=0")}])

(defn table-row [x]  [:tr (map #(vector :td (str %)) x)])

(defn table [x]
  #hiccup [:table.table.table-bordered.table-striped.table-condensed (map table-row x)])
