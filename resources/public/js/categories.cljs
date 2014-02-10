(ns categories)

(def categories [{:title "Сотовая связь" :id 7 :providers
                  [ { :name "ОАО «Мобильные ТелеСистемы»" :id 1 :clearing 2 }
                    { :name "ОАО «ВымпелКом»" :id 2 :clearing 1 }
                    { :name "ЗАО «Байкалвестком»" :id 6 :clearing 2 }
                    { :name "Мегафон Столичный филиал" :id 9 :clearing 2 }
                    { :name "ОАО «Московская сотовая связь»" :id 11 :clearing 2 }
                    { :name "ЗАО «Ростовская сотовая связь»" :id 14 :clearing 2 }
                    { :name "ЗАО «Нижегородская Сотовая Связь»" :id 16 :clearing 2 }
                    { :name "ООО «Екатеринбург-2000»" :id 17 :clearing 2 }
                    { :name "ОАО «Уралсвязьинформ»" :id 19 :clearing 2 }
                    { :name "ООО \"Матрикс Телеком\"" :id 28 :clearing 2 }
                    { :name "ЗАО «СМАРТС»" :id 30 :clearing 2 }
                    { :name "ЗАО «Волгоград-GSM»" :id 31 :clearing 2 }
                    { :name "ЗАО «Астрахань-GSM»" :id 32 :clearing 2 }
                    { :name "ЗАО «Ярославль-GSM»" :id 33 :clearing 2 }
                    { :name "ЗАО «Пенза-GSM»" :id 34 :clearing 2 }
                    { :name "ЗАО «Шупашкар-GSM»" :id 35 :clearing 2 }
                    { :name "ЗАО «Енисейтелеком»" :id 36 :clearing 2 }
                    { :name "ЗАО «АКОС»" :id 38 :clearing 2 }
                    { :name "ЗАО «Ульяновск-GSM»" :id 39 :clearing 2 }
                    { :name "ЗАО «МетроТелКазань»" :id 40 :clearing 1 }
                    { :name "ОАО «ТАТИНКОМ-Т»" :id 41 :clearing 2 }
                    { :name "ЗАО «Кодотел»" :id 44 :clearing 2 }
                    { :name "ЗАО «ВладТелеком»" :id 65 :clearing 2 }
                    { :name "ЗАО «Уралвестком»" :id 66 :clearing 2 }
                    { :name "ЗАО «Сотел-Нижний Новгород»" :id 67 :clearing 2 }
                    { :name "ООО «Удмуртские Сотовые Сети-450»" :id 68 :clearing 2 }
                    { :name "ЗАО «Дельта Телеком»" :id 69 :clearing 2 }
                    { :name "Томский филиал ОАО «Сибирьтелеком»" :id 71 :clearing 2 }
                    { :name "ЗАО «Новосибирская Сотовая Связь 450»" :id 85 :clearing 2 }
                    { :name "ЗАО «Оренбург-GSM»" :id 97 :clearing 2 }
                    { :name "ЗАО «Сотовая Связь Черноземья»" :id 100 :clearing 2 }
                    { :name "МегаФон Северо-Западный филиал" :id 177 :clearing 2 }
                    { :name "МегаФон Сибирский филиал" :id 178 :clearing 2 }
                    { :name "МегаФон Кавказский филиал" :id 179 :clearing 2 }
                    { :name "МегаФон Уральский филиал" :id 181 :clearing 2 }
                    { :name "МегаФон Дальневосточный филиал" :id 183 :clearing 2 }
                    { :name "МегаФон Центральный филиал" :id 184 :clearing 2 }
                    { :name "Смартс Иваново" :id 185 :clearing 2 }
                    { :name "НСС Республика Чувашия" :id 191 :clearing 2 }
                    { :name "СкайЛинк Челябинск" :id 194 :clearing 2 }
                    { :name "СкайЛинк Северная Осетия" :id 197 :clearing 2 }
                    { :name "СкайЛинк Ростовская область" :id 202 :clearing 2 }
                    { :name "СОТЕЛ" :id 207 :clearing 2 }
                    { :name "НСС Пенза" :id 209 :clearing 2 }
                    { :name "НСС Саратов" :id 210 :clearing 2 }
                    { :name "СкайЛинк Саратов" :id 212 :clearing 2 }
                    { :name "НСС Мордовия" :id 213 :clearing 2 }
                    { :name "СкайЛинк Омск" :id 217 :clearing 2 }
                    { :name "СкайЛинк Волгоград" :id 220 :clearing 2 }
                    { :name "СкайЛинк Кемерово" :id 225 :clearing 2 }
                    { :name "СкайЛинк Краснодар" :id 226 :clearing 2 }
                    { :name "Ё Самара" :id 227 :clearing 2 }
                    { :name "Ё Чувашия" :id 228 :clearing 2 }
                    { :name "СкайЛинк Калуга" :id 230 :clearing 2 }
                    { :name "СкайЛинк Рязань" :id 231 :clearing 2 }
                    { :name "СкайЛинк Ульяновск" :id 236 :clearing 2 }
                    { :name "ПРОСТО Сибирь" :id 237 :clearing 2 }
                    { :name "СкайЛинк Кировская область" :id 243 :clearing 2 }
                    { :name "СкайЛинк Барнаул" :id 262 :clearing 2 }
                    { :name "МегаФон Поволжский филиал" :id 652 :clearing 2 }
                    { :name "Ворлд Трэвел Телеком" :id 671 :clearing 2 }
                    { :name "ЗАО \"КантриКом\"" :id 677 :clearing 2 }
                    { :name "ПРОСТО Москва" :id 678 :clearing 2 }
                    { :name "ВолгаТелеком Марий Эл" :id 711 :clearing 2 }]}
                 {:title "Интернет" :id 9 :providers
                  [ { :name "ОАО «ВымпелКом»" :id 2 :clearing 1 }
                    { :name "ОАО «Уралсвязьинформ»" :id 19 :clearing 1 }
                    { :name "ЗАО «КОМСТАР-Директ»" :id 23 :clearing 2 }
                    { :name "ОАО \"КОМСТАР-ОТС\"" :id 43 :clearing 1 }
                    { :name "ОАО «Дальсвязь»" :id 45 :clearing 1 }
                    { :name "ООО «Архангельская телевизионная компания»" :id 47 :clearing 1 }
                    { :name "ООО \"Бутовский Интернет Клуб \"БУТИК\"" :id 54 :clearing 1 }
                    { :name "ООО \"Экстрим\"" :id 55 :clearing 2 }
                    { :name "ЗАО «Группа Компаний «Консул»" :id 56 :clearing 2 }
                    { :name "ЗАО «Комкор-ТВ»" :id 58 :clearing 2 }
                    { :name "ООО «Телесеть Сервис»" :id 60 :clearing 1 }
                    { :name "ЗАО НПО «Прогтех»" :id 63 :clearing 1 }
                    { :name "ООО «Комтехцентр»" :id 64 :clearing 2 }
                    { :name "ОАО «Телекомпания Санкт-Петербургское кабельное телевидение»" :id 70 :clearing 1 }
                    { :name "ООО «СЦС Совинтел»" :id 88 :clearing 1 }
                    { :name "ООО «ДиСат»" :id 91 :clearing 2 }
                    { :name "ОАО «Межрегиональный ТранзитТелеком»" :id 109 :clearing 1 }
                    { :name "ООО «Скартел»" :id 119 :clearing 2 }
                    { :name "ЗАО «Инфолайн»" :id 120 :clearing 2 }
                    { :name "ЗАО «Центел»" :id 121 :clearing 2 }
                    { :name "ОАО \"Национальные кабельные сети\"" :id 122 :clearing 1 }
                    { :name "ЗАО \"Вэб Плас\"" :id 130 :clearing 1 }
                    { :name "ОАО «ТРК „ТВТ“»" :id 173 :clearing 1 }
                    { :name "Спарк" :id 190 :clearing 2 }
                    { :name "ЛИНКИ" :id 192 :clearing 2 }
                    { :name "ИНСИС" :id 198 :clearing 2 }
                    { :name "NetByNet Регионы" :id 204 :clearing 2 }
                    { :name "UfaNet Уфа" :id 208 :clearing 2 }
                    { :name "Rinet" :id 214 :clearing 2 }
                    { :name "CONVEX" :id 218 :clearing 2 }
                    { :name "Группа Тауэр Телеком" :id 219 :clearing 2 }
                    { :name "СвязьТелеком - Белгород" :id 223 :clearing 2 }
                    { :name "Брянсктел Интернет" :id 234 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Московский ф" :id 240 :clearing 2 }
                    { :name "PowerNet" :id 241 :clearing 2 }
                    { :name "Коламбия Телеком" :id 245 :clearing 2 }
                    { :name "Информсвязь" :id 246 :clearing 2 }
                    { :name "СиНТ" :id 251 :clearing 2 }
                    { :name "Омские Кабельные Сети" :id 253 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Калужский филиал" :id 256 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Липецкий филиал" :id 258 :clearing 2 }
                    { :name "ИРКНЭТ ТЕЛЕКОМ" :id 260 :clearing 2 }
                    { :name "Комплат" :id 261 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Тульский филиал" :id 265 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Курский филиал" :id 266 :clearing 2 }
                    { :name "Good Line" :id 267 :clearing 2 }
                    { :name "Интеркон" :id 268 :clearing 2 }
                    { :name "Ufanet Ишимбай" :id 269 :clearing 2 }
                    { :name "Ufanet Орск" :id 270 :clearing 2 }
                    { :name "Ufanet Октябрьский" :id 271 :clearing 2 }
                    { :name "Ufanet Нефтекамск" :id 272 :clearing 2 }
                    { :name "Новые ТелеСистемы Интер,Каб.ТВ,тел.связь" :id 273 :clearing 2 }
                    { :name "МРФ Волга Самара (оплата по лиц.сч)" :id 276 :clearing 2 }
                    { :name "Интерсвязь" :id 278 :clearing 2 }
                    { :name "UTEL домашний интернет" :id 297 :clearing 2 }
                    { :name "УГМК Телеком.Интернет" :id 299 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Смоленский ф-л" :id 300 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Орловский ф-л" :id 301 :clearing 2 }
                    { :name "Зенон Н.С.П." :id 302 :clearing 2 }
                    { :name "Ufanet Оренбург" :id 303 :clearing 2 }
                    { :name "Ufanet Стерлитамак" :id 304 :clearing 2 }
                    { :name "RightSide" :id 307 :clearing 2 }
                    { :name "Информационные системы Киров (ИнСис)" :id 311 :clearing 2 }
                    { :name "МРФ Юг. Интернет (по договорам)" :id 316 :clearing 2 }
                    { :name "МУЛЬТИНЕКС г.Омск" :id 318 :clearing 2 }
                    { :name "МРФ Волга Саратов. Интернет" :id 323 :clearing 2 }
                    { :name "МРФ Волга Киров. Интернет" :id 326 :clearing 2 }
                    { :name "МРФ Волга Оренбург.Интернет(лиц.счет)" :id 329 :clearing 2 }
                    { :name "МРФ Волга Оренбург. Интернет(телефон)" :id 330 :clearing 2 }
                    { :name "МРФ Волга Чувашия. Интернет" :id 332 :clearing 2 }
                    { :name "МРФ Волга Нижний Новгород.Интернет" :id 335 :clearing 2 }
                    { :name "МРФ Волга Удмуртия. Интернет" :id 337 :clearing 2 }
                    { :name "МРФ Волга Марий Эл. Интернет" :id 340 :clearing 2 }
                    { :name "DOMOLINK. ЦентрТелеком Тамбовский ф-л" :id 346 :clearing 2 }
                    { :name "ДОМ.RU Интернет Тюмень" :id 374 :clearing 2 }
                    { :name "ДОМ.RU Интернет Йошкар Ола" :id 379 :clearing 2 }
                    { :name "ДОМ.RU Интернет Самара" :id 383 :clearing 2 }
                    { :name "ДОМ.RU Интернет Нижний Новгород" :id 385 :clearing 2 }
                    { :name "ДОМ.RU Интернет Челябинск" :id 386 :clearing 2 }
                    { :name "ДОМ.RU Интернет Липецк" :id 447 :clearing 2 }
                    { :name "Сумма Телеком" :id 457 :clearing 2 }
                    { :name "ТТК.Интернет" :id 486 :clearing 2 }
                    { :name "Dagomys Telecom" :id 511 :clearing 2 }
                    { :name "ДОМ.RU Интернет Новосибирск" :id 516 :clearing 2 }
                    { :name "Новотелеком" :id 521 :clearing 2 }
                    { :name "Инфолайн интернет-сервисы" :id 530 :clearing 2 }
                    { :name "ООО \"Компания 2Ком\"" :id 655 :clearing 2 }
                    { :name "ООО \"Фрязинский городской информационный центр\"" :id 656 :clearing 2 }
                    { :name "Диджитал Нетворк" :id 658 :clearing 2 }
                    { :name "ЗАО \"Стар Нетворкс\"" :id 659 :clearing 2 }
                    { :name "ООО \"Телесеть-сервис\"" :id 660 :clearing 2 }
                    { :name "ООО \"СкайНэт\"" :id 662 :clearing 2 }
                    { :name "ООО \"Интернет-компания Сампо.ру\"" :id 663 :clearing 2 }
                    { :name "ЗАО \"Риал Ком\"" :id 664 :clearing 2 }
                    { :name "ЗАО \"Инвестприбор\"" :id 665 :clearing 2 }
                    { :name "ЗАО \"Искрателеком\"" :id 666 :clearing 2 }
                    { :name "ООО \"Арома Лэск\"" :id 667 :clearing 2 }
                    { :name "ООО \"Инет Ком\"" :id 669 :clearing 2 }
                    { :name "НОУ \"УНПК МФТИ\"" :id 670 :clearing 2 }
                    { :name "ООО \"Бэйрэль Телеком\"" :id 672 :clearing 2 }
                    { :name "ООО \"Перспектива\"" :id 674 :clearing 2 }
                    { :name "TOMTEL (Интернет)" :id 675 :clearing 2 }
                    { :name "Кварц (г.Подольск)" :id 676 :clearing 2 }
                    { :name "ООО \"Флекс\"" :id 679 :clearing 2 }
                    { :name "ООО \"ГорКом Юг-запад\" ООО ГорКом Регион\"" :id 681 :clearing 2 }
                    { :name "ООО \"Связь-Телеком\".Воронеж\"" :id 683 :clearing 2 }
                    { :name "ООО \"Интернет центр\"" :id 684 :clearing 2 }
                    { :name "ЗАО \"Росинтел\"" :id 686 :clearing 2 }
                    { :name "Сибирские Cети ООО" :id 690 :clearing 2 }
                    { :name "ООО \"Абевег\"" :id 695 :clearing 2 }
                    { :name "Таттелеком" :id 696 :clearing 2 }
                    { :name "ЗАО \"АИСТ\"" :id 697 :clearing 2 }
                    { :name "ПРК \"ЭПЛ\"" :id 702 :clearing 2 }
                    { :name "ООО \"К Телеком\"" :id 703 :clearing 2 }
                    { :name "ООО \"КДМС\"" :id 704 :clearing 2 }
                    { :name "ЗАО \"СЕТЬТЕЛЕКОМ\"" :id 708 :clearing 2 }
                    { :name "ООО Престиж-Интернет" :id 710 :clearing 2 }]}
                 {:title "Коммерческое телевидение" :id 10 :providers
                  [ { :name "ОАО «НТВ-Плюс»" :id 5 :clearing 2 }
                    { :name "ОАО «Уралсвязьинформ»" :id 19 :clearing 1 }
                    { :name "ЗАО «КОСМОС–ТВ»" :id 25 :clearing 1 }
                    { :name "ОАО \"КОМСТАР-ОТС\"" :id 43 :clearing 1 }
                    { :name "ООО «Архангельская телевизионная компания»" :id 47 :clearing 1 }
                    { :name "ЗАО «Комкор-ТВ»" :id 58 :clearing 1 }
                    { :name "ООО «Комтехцентр»" :id 64 :clearing 1 }
                    { :name "ОАО «Телекомпания Санкт-Петербургское кабельное телевидение»" :id 70 :clearing 1 }
                    { :name "ЗАО «Центел»" :id 121 :clearing 1 }
                    { :name "ОАО \"Национальные кабельные сети\"" :id 122 :clearing 2 }
                    { :name "ЗАО «Национальная спутниковая компания»" :id 124 :clearing 2 }
                    { :name "ОАО «ТРК „ТВТ“»" :id 173 :clearing 1 }
                    { :name "Триколор ТВ.Ночной" :id 279 :clearing 2 }
                    { :name "UTEL цифровое интерактивное телевидение" :id 298 :clearing 2 }
                    { :name "МРФ Юг. Аренда оборудования" :id 317 :clearing 2 }
                    { :name "МультиКабельные Сети" :id 319 :clearing 2 }
                    { :name "МРФ Волга Киров.ТВ" :id 327 :clearing 2 }
                    { :name "МРФ Волга Чувашия. ТВ" :id 333 :clearing 2 }
                    { :name "Кабельное телевидение ДОМ.RU Волгоград" :id 390 :clearing 2 }
                    { :name "Кабельное телевидение ДОМ.RU Н. Новгород" :id 404 :clearing 2 }
                    { :name "Радуга ТВ" :id 427 :clearing 2 }
                    { :name "Кабельное телевидение ДОМ.RU Воронеж" :id 453 :clearing 2 }
                    { :name "ООО \"Орион Экспресс\"" :id 688 :clearing 2 }
                    { :name "МПРО Свято-Троицкое Архиерейское Подворье" :id 746 :clearing 2 }]}
                 {:title "Телефония" :id 11 :providers
                  [ { :name "ОАО «Уралсвязьинформ»" :id 19 :clearing 1 }
                    { :name "ОАО «Ростелеком»" :id 22 :clearing 2 }
                    { :name "ЗАО \"Зебра Телеком\"" :id 27 :clearing 2 }
                    { :name "ЗАО «МетроТелКазань»" :id 40 :clearing 1 }
                    { :name "ОАО \"КОМСТАР-ОТС\"" :id 43 :clearing 1 }
                    { :name "ООО «Бит-Телеком»" :id 46 :clearing 1 }
                    { :name "ООО «Тарио Трейдинг Лтд»" :id 57 :clearing 1 }
                    { :name "ЗАО «Комкор-ТВ»" :id 58 :clearing 1 }
                    { :name "ЗАО НПО «Прогтех»" :id 63 :clearing 1 }
                    { :name "ОАО «Телекомпания Санкт-Петербургское кабельное телевидение»" :id 70 :clearing 1 }
                    { :name "ОАО «Арктел»" :id 86 :clearing 1 }
                    { :name "ОАО «Межрегиональный ТранзитТелеком»" :id 109 :clearing 1 }
                    { :name "ЗАО «Центел»" :id 121 :clearing 1 }
                    { :name "ООО «Манго Телеком»" :id 172 :clearing 1 }
                    { :name "ОАО «ТРК „ТВТ“»" :id 173 :clearing 1 }
                    { :name "МГТС" :id 180 :clearing 2 }
                    { :name "ТЕЛЕСЕТ, г.Казань/ЖКХ Телефон" :id 229 :clearing 2 }
                    { :name "МРФ Центр Московский филиал" :id 238 :clearing 2 }
                    { :name "ТЕЛЕСЕТ, г. Набережные Челны/ЖКХ Телефон" :id 244 :clearing 2 }
                    { :name "МРФ Центр Калужский филиал" :id 255 :clearing 2 }
                    { :name "МРФ Центр Липецкий филиал" :id 259 :clearing 2 }
                    { :name "МРФ Центр Курский филиал" :id 263 :clearing 2 }
                    { :name "МРФ Центр Тульский филиал" :id 264 :clearing 2 }
                    { :name "МРФ Дал. Восток Сахателеком (Ростелеком)" :id 274 :clearing 2 }
                    { :name "МРФ Дальний Восток Сахателеком (МТТ)" :id 275 :clearing 2 }
                    { :name "МРФ Волга Самара(оплата по ном.тел.)" :id 277 :clearing 2 }
                    { :name "МРФ Центр Рязанский филиал" :id 283 :clearing 2 }
                    { :name "МРФ Центр Тверской филиал. Инт. Радио" :id 285 :clearing 2 }
                    { :name "МРФ Центр Тверской филиал. Непроф." :id 286 :clearing 2 }
                    { :name "МРФ Центр Тверской филиал.Телефония" :id 287 :clearing 2 }
                    { :name "МРФ Центр Воронежский филиал" :id 288 :clearing 2 }
                    { :name "МРФ Центр Белгородский филиал" :id 289 :clearing 2 }
                    { :name "МРФ Центр Смоленский филиал" :id 290 :clearing 2 }
                    { :name "МРФ Центр Орловский филиал" :id 294 :clearing 2 }
                    { :name "UTEL фиксированная связь" :id 295 :clearing 2 }
                    { :name "UTEL SIP Телефония" :id 296 :clearing 2 }
                    { :name "СЗТ. МТТ. Ленин. обл. филиал" :id 305 :clearing 2 }
                    { :name "СЗТ. Междуг. МТТ. Ф-л респ. Коми" :id 306 :clearing 2 }
                    { :name "СЗТ. МТТ. Петербургский филиал" :id 308 :clearing 2 }
                    { :name "СЗТ. МТТ. Калининградский филиал" :id 309 :clearing 2 }
                    { :name "СЗТ. Калининградский филиал" :id 310 :clearing 2 }
                    { :name "МРФ Юг. Оплата местной тел. связи" :id 314 :clearing 2 }
                    { :name "МРФ Юг. Роcтелеком" :id 315 :clearing 2 }
                    { :name "МРФ Волга Саратов.ЖКХ Телефон" :id 324 :clearing 2 }
                    { :name "МРФ Волга Киров.Телефония" :id 325 :clearing 2 }
                    { :name "МРФ Волга Мордовия.ЖКХ Телефон" :id 328 :clearing 2 }
                    { :name "МРФ Волга Чувашия.ЖКХ телефон" :id 331 :clearing 2 }
                    { :name "МРФ Волга Нижний Новгород.ЖКХ Телефон" :id 334 :clearing 2 }
                    { :name "МРФ Волга Удмуртия.ЖКХ Телефон" :id 336 :clearing 2 }
                    { :name "МРФ Волга Ульяновск.ЖКХ Телефон" :id 338 :clearing 2 }
                    { :name "МРФ Волга Марий Эл.ЖКХ Телефон" :id 339 :clearing 2 }
                    { :name "МРФ Волга Пенза.ЖКХ Телефон" :id 341 :clearing 2 }
                    { :name "МРФ Волга Оренбург.ЖКХ Тел(лиц.счет)" :id 342 :clearing 2 }
                    { :name "МРФ Волга Оренбург.ЖКХ Тел(ном.тел)" :id 343 :clearing 2 }
                    { :name "МРФ Центр Тамбовский филиал" :id 344 :clearing 2 }
                    { :name "СЗТ. Мурманский филиал" :id 347 :clearing 2 }
                    { :name "СЗТ Мурманский филиал. МТТ" :id 348 :clearing 2 }
                    { :name "СЗТ.  Услуги связи. Архангельский ф-л" :id 349 :clearing 2 }
                    { :name "СЗТ. Междугор.связь МТТ. Арханг. ф-л" :id 350 :clearing 2 }
                    { :name "Акадо Москва.ЖКХ Оплата телефона" :id 443 :clearing 2 }
                    { :name "ОАО \"Информационное бюро Бизнес Волна\"" :id 682 :clearing 2 }
                    { :name "ОАО \"Северо-Западный Телеком\"" :id 709 :clearing 2 }]}
                 {:title "Платежные системы" :id 12 :providers
                  [ { :name "ООО \"РБК Мани\"" :id 101 :clearing 1 }
                    { :name "ВКонтакте.ру" :id 239 :clearing 2 }
                    { :name "QIWI Кошелек.Пополнение" :id 635 :clearing 2 }
                    { :name "ООО \"МАМБА\"" :id 657 :clearing 2 }
                    { :name "Мобильный кошелек" :id 661 :clearing 2 }
                    { :name "ЗАО \"Информационно-процессинговый центр\"" :id 673 :clearing 2 }
                    { :name "ООО \"Магнум\"" :id 693 :clearing 2 }
                    { :name "ООО \"ПИНИЯ\"" :id 698 :clearing 2 }
                    { :name "Легенда: Фэо прайм" :id 700 :clearing 2 }
                    { :name "Perfect World" :id 701 :clearing 2 }]}
                 {:title "Жилищно-коммунальные платежи" :id 17 :providers
                  [ { :name "ЖКУ Москва" :id 203 :clearing 2 }
                    { :name "Мосэнергосбыт" :id 211 :clearing 2 }
                    { :name "УК Проспект" :id 242 :clearing 2 }
                    { :name "Красноярскэнергосбыт" :id 248 :clearing 2 }
                    { :name "Пермэнергосбыт" :id 249 :clearing 2 }
                    { :name "ИРЦБ Начисления текущего периода" :id 281 :clearing 2 }
                    { :name "Красноярсккрайгаз" :id 360 :clearing 2 }
                    { :name "ГУП ВЦКП \"Жилищное хозяйство\"" :id 463 :clearing 2 }
                    { :name "Кубаньэнергосбыт" :id 510 :clearing 2 }
                    { :name "Управляющая компания №1" :id 526 :clearing 2 }
                    { :name "Управляющая компания 3 г.Тольятти" :id 531 :clearing 2 }
                    { :name "Мосэнергосбыт МО" :id 554 :clearing 2 }
                    { :name "Тюменьэнергосбыт" :id 583 :clearing 2 }
                    { :name "ЧЭСК" :id 590 :clearing 2 }
                    { :name "УК Твой Дом г. Тольятти" :id 618 :clearing 2 }
                    { :name "ЖИЛФОНД Красноярск" :id 685 :clearing 2 }
                    { :name "ООО \"Юнисервис\"" :id 691 :clearing 2 }
                    { :name "ООО \"Ведис Комфорт\"" :id 736 :clearing 2 }
                    { :name "ПИК-Комфорт ООО" :id 754 :clearing 2 }
                    { :name "ОАО \"Татэнергосбыт\"" :id 777 :clearing 2 }]}
                 {:title "Другое" :id 13 :providers
                  [ { :name "ООО \"Хостинг-Центр\"" :id 128 :clearing 2 }
                    { :name "ООО \"Инновационная группа \"Виннер\"" :id 167 :clearing 2 }
                    { :name "RU CENTER" :id 189 :clearing 2 }
                    { :name "Цезарь Сателлит" :id 195 :clearing 2 }
                    { :name "Автолокатор" :id 215 :clearing 2 }
                    { :name "Цезарь Сателлит Северо Запад" :id 224 :clearing 2 }
                    { :name "Masterhost" :id 254 :clearing 2 }
                    { :name "МРФ Центр Тамбовский филиал.Радио" :id 345 :clearing 2 }
                    { :name "Avon" :id 419 :clearing 2 }
                    { :name "ООО \"Недвижимость Онлайн\"" :id 654 :clearing 2 }
                    { :name "Просвещенный Запад ООО" :id 680 :clearing 2 }
                    { :name "ООО \"Мобилфон\"" :id 689 :clearing 2 }
                    { :name "ООО \"ФарПост\"" :id 692 :clearing 2 }
                    { :name "ООО \"АМФ\"" :id 694 :clearing 2 }
                    { :name "Парапа: Город Танцев" :id 699 :clearing 2 }
                    { :name "Фонд \"Подари жизнь\"" :id 705 :clearing 2 }
                    { :name "ООО \"Русская рыбалка\"" :id 706 :clearing 2 }
                    { :name "ООО \"Нивал Нетворк\"" :id 707 :clearing 2 }
                    { :name "Zepter HOME ART" :id 771 :clearing 2 }
                    { :name "Zepter HOME CARE" :id 772 :clearing 2 }
                    { :name "ZEPTER РАЗНОЕ (ДОГОВОР DF)" :id 773 :clearing 2 }]}])
