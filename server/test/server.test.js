require('dotenv').config()
const request = require('supertest')
const expect = require('chai').expect
const db = require('../db/connection')

const server = require('../server')

//JWT authentication token
const tokenKey = process.env.NODE_ENV_tokenKey

describe('Integration test', function (){

    this.timeout(10000)

    after(function (done){
        db.close()
        .then(() => done())
        .catch((err)=>done(err))
    })

    it('ERROR, Wrong GET raute', (done)=>{
        request(server).get("/api/")
        .auth('Authorization', 'Bearer ' + tokenKey)
        .then(res=>{
            expect(res.statusCode).to.equal(404);
            done()
        }).catch(err=>done(err))
    })

    it('OK, Simple GET request for provinces', function (done){
        request(server).get("/api/provinces/KOWALSKA")
        .auth('Authorization', 'Bearer ' + tokenKey)
        .then(res=>{
            expect(res.body).to.have.deep.members([
                {
                    "_id": "LUBELSKIE",
                    "count": 3195
                },
                {
                    "_id": "ŚWIĘTOKRZYSKIE",
                    "count": 3189
                },
                {
                    "_id": "POMORSKIE",
                    "count": 3325
                },
                {
                    "_id": "WARMIŃSKO-MAZURSKIE",
                    "count": 3046
                },
                {
                    "_id": "MAZOWIECKIE",
                    "count": 12854
                },
                {
                    "_id": "WIELKOPOLSKIE",
                    "count": 6267
                },
                {
                    "_id": "ŚLĄSKIE",
                    "count": 5330
                },
                {
                    "_id": "KUJAWSKO-POMORSKIE",
                    "count": 5704
                },
                {
                    "_id": "OPOLSKIE",
                    "count": 1133
                },
                {
                    "_id": "PODKARPACKIE",
                    "count": 1624
                },
                {
                    "_id": "PODLASKIE",
                    "count": 501
                },
                {
                    "_id": "LUBUSKIE",
                    "count": 1373
                },
                {
                    "_id": "ŁÓDZKIE",
                    "count": 6909
                },
                {
                    "_id": "MAŁOPOLSKIE",
                    "count": 3518
                },
                {
                    "_id": "DOLNOŚLĄSKIE",
                    "count": 4462
                },
                {
                    "_id": "ZACHODNIOPOMORSKIE",
                    "count": 2934
                }
            ])
            done()
        }).catch(err=>done(err))
    })

    it('OK, Simple GET request for counties', function (done){
        request(server).get("/api/counties/KOWALSKA")
        .auth('Authorization', 'Bearer ' + tokenKey)
        .then(res=>{          
            expect(res.body).to.have.deep.members([
                {
                    "_id": "GDAŃSKI",
                    "count": 180
                },
                {
                    "_id": "ROPCZYCKO-SĘDZISZOWSKI",
                    "count": 46
                },
                {
                    "_id": "GOSTYŃSKI",
                    "count": 70
                },
                {
                    "_id": "ŚWIDNICKI",
                    "count": 361
                },
                {
                    "_id": "ZWOLEŃSKI",
                    "count": 33
                },
                {
                    "_id": "SULĘCIŃSKI",
                    "count": 38
                },
                {
                    "_id": "ŚREDZKI",
                    "count": 166
                },
                {
                    "_id": "OŁAWSKI",
                    "count": 90
                },
                {
                    "_id": "PŁOŃSKI",
                    "count": 490
                },
                {
                    "_id": "SOCHACZEWSKI",
                    "count": 310
                },
                {
                    "_id": "LIPNOWSKI",
                    "count": 399
                },
                {
                    "_id": "NOWODWORSKI",
                    "count": 410
                },
                {
                    "_id": "SZCZYCIEŃSKI",
                    "count": 135
                },
                {
                    "_id": "POLICKI",
                    "count": 107
                },
                {
                    "_id": "TURECKI",
                    "count": 226
                },
                {
                    "_id": "SŁAWIEŃSKI",
                    "count": 154
                },
                {
                    "_id": "ZIELONOGÓRSKI",
                    "count": 82
                },
                {
                    "_id": "BRZEZIŃSKI",
                    "count": 130
                },
                {
                    "_id": "RYCKI",
                    "count": 92
                },
                {
                    "_id": "KĘDZIERZYŃSKO-KOZIELSKI",
                    "count": 94
                },
                {
                    "_id": "KARTUSKI",
                    "count": 72
                },
                {
                    "_id": "ŁĘCZYCKI",
                    "count": 207
                },
                {
                    "_id": "KOSZALIN",
                    "count": 227
                },
                {
                    "_id": "MIŃSKI",
                    "count": 222
                },
                {
                    "_id": "SKIERNIEWICKI",
                    "count": 97
                },
                {
                    "_id": "ALEKSANDROWSKI",
                    "count": 99
                },
                {
                    "_id": "OSTROŁĘCKI",
                    "count": 162
                },
                {
                    "_id": "STRZYŻOWSKI",
                    "count": 72
                },
                {
                    "_id": "ELBLĄSKI",
                    "count": 114
                },
                {
                    "_id": "WŁOCŁAWEK",
                    "count": 227
                },
                {
                    "_id": "MYŚLENICKI",
                    "count": 60
                },
                {
                    "_id": "OLSZTYŃSKI",
                    "count": 296
                },
                {
                    "_id": "CHEŁM",
                    "count": 102
                },
                {
                    "_id": "SEJNEŃSKI",
                    "count": 2
                },
                {
                    "_id": "CIESZYŃSKI",
                    "count": 97
                },
                {
                    "_id": "DĄBROWSKI",
                    "count": 21
                },
                {
                    "_id": "BIŁGORAJSKI",
                    "count": 57
                },
                {
                    "_id": "JANOWSKI",
                    "count": 22
                },
                {
                    "_id": "OPOCZYŃSKI",
                    "count": 291
                },
                {
                    "_id": "JAROCIŃSKI",
                    "count": 103
                },
                {
                    "_id": "NAKIELSKI",
                    "count": 270
                },
                {
                    "_id": "CHRZANOWSKI",
                    "count": 190
                },
                {
                    "_id": "KĘPIŃSKI",
                    "count": 23
                },
                {
                    "_id": "MYŚLIBORSKI",
                    "count": 132
                },
                {
                    "_id": "SĘPOLEŃSKI",
                    "count": 97
                },
                {
                    "_id": "ZGORZELECKI",
                    "count": 160
                },
                {
                    "_id": "BIAŁA PODLASKA",
                    "count": 26
                },
                {
                    "_id": "GARWOLIŃSKI",
                    "count": 334
                },
                {
                    "_id": "ŁOSICKI",
                    "count": 4
                },
                {
                    "_id": "ŻYRARDOWSKI",
                    "count": 334
                },
                {
                    "_id": "STALOWOWOLSKI",
                    "count": 89
                },
                {
                    "_id": "LIPSKI",
                    "count": 51
                },
                {
                    "_id": "WŁODAWSKI",
                    "count": 41
                },
                {
                    "_id": "GRAJEWSKI",
                    "count": 34
                },
                {
                    "_id": "RADOMSKI",
                    "count": 243
                },
                {
                    "_id": "WIELUŃSKI",
                    "count": 115
                },
                {
                    "_id": "KOLNEŃSKI",
                    "count": 14
                },
                {
                    "_id": "JELENIOGÓRSKI",
                    "count": 106
                },
                {
                    "_id": "STAROGARDZKI",
                    "count": 198
                },
                {
                    "_id": "TCZEWSKI",
                    "count": 183
                },
                {
                    "_id": "RACIBORSKI",
                    "count": 96
                },
                {
                    "_id": "CHORZÓW",
                    "count": 120
                },
                {
                    "_id": "PRZASNYSKI",
                    "count": 159
                },
                {
                    "_id": "RYBNIK",
                    "count": 109
                },
                {
                    "_id": "KONECKI",
                    "count": 190
                },
                {
                    "_id": "ŁUKOWSKI",
                    "count": 113
                },
                {
                    "_id": "LESKI",
                    "count": 11
                },
                {
                    "_id": "STARACHOWICKI",
                    "count": 261
                },
                {
                    "_id": "ŁOMŻA",
                    "count": 52
                },
                {
                    "_id": "SUSKI",
                    "count": 37
                },
                {
                    "_id": "BIERUŃSKO-LĘDZIŃSKI",
                    "count": 61
                },
                {
                    "_id": "STRZELECKO-DREZDENECKI",
                    "count": 56
                },
                {
                    "_id": "INOWROCŁAWSKI",
                    "count": 423
                },
                {
                    "_id": "GOSTYNIŃSKI",
                    "count": 160
                },
                {
                    "_id": "LEŻAJSKI",
                    "count": 13
                },
                {
                    "_id": "RUDA ŚLĄSKA",
                    "count": 209
                },
                {
                    "_id": "KOLSKI",
                    "count": 239
                },
                {
                    "_id": "TARNOWSKI",
                    "count": 152
                },
                {
                    "_id": "DZIAŁDOWSKI",
                    "count": 284
                },
                {
                    "_id": "ŻYWIECKI",
                    "count": 54
                },
                {
                    "_id": "KOŚCIAŃSKI",
                    "count": 83
                },
                {
                    "_id": "OSTRZESZOWSKI",
                    "count": 78
                },
                {
                    "_id": "POZNAŃSKI",
                    "count": 561
                },
                {
                    "_id": "SANOCKI",
                    "count": 75
                },
                {
                    "_id": "CHOSZCZEŃSKI",
                    "count": 102
                },
                {
                    "_id": "ZAWIERCIAŃSKI",
                    "count": 220
                },
                {
                    "_id": "SŁUPSK",
                    "count": 177
                },
                {
                    "_id": "SKARŻYSKI",
                    "count": 117
                },
                {
                    "_id": "NOWOTOMYSKI",
                    "count": 48
                },
                {
                    "_id": "PRZYSUSKI",
                    "count": 163
                },
                {
                    "_id": "WARSZAWSKI ZACHODNI",
                    "count": 373
                },
                {
                    "_id": "BIAŁOBRZESKI",
                    "count": 17
                },
                {
                    "_id": "CZŁUCHOWSKI",
                    "count": 90
                },
                {
                    "_id": "MOGILEŃSKI",
                    "count": 219
                },
                {
                    "_id": "MRĄGOWSKI",
                    "count": 64
                },
                {
                    "_id": "ŚWIECKI",
                    "count": 162
                },
                {
                    "_id": "LĘBORSKI",
                    "count": 63
                },
                {
                    "_id": "ZŁOTORYJSKI",
                    "count": 78
                },
                {
                    "_id": "LUBAŃSKI",
                    "count": 80
                },
                {
                    "_id": "KIELCE",
                    "count": 469
                },
                {
                    "_id": "MYSZKOWSKI",
                    "count": 74
                },
                {
                    "_id": "WĄGROWIECKI",
                    "count": 103
                },
                {
                    "_id": "SUWALSKI",
                    "count": 10
                },
                {
                    "_id": "OPATOWSKI",
                    "count": 127
                },
                {
                    "_id": "JELENIA GÓRA",
                    "count": 134
                },
                {
                    "_id": "MYSŁOWICE",
                    "count": 147
                },
                {
                    "_id": "KŁODZKI",
                    "count": 225
                },
                {
                    "_id": "KAMIENNOGÓRSKI",
                    "count": 65
                },
                {
                    "_id": "WOŁOWSKI",
                    "count": 49
                },
                {
                    "_id": "MILICKI",
                    "count": 82
                },
                {
                    "_id": "KOLBUSZOWSKI",
                    "count": 32
                },
                {
                    "_id": "WYSOKOMAZOWIECKI",
                    "count": 9
                },
                {
                    "_id": "EŁCKI",
                    "count": 76
                },
                {
                    "_id": "GORZÓW WIELKOPOLSKI",
                    "count": 222
                },
                {
                    "_id": "SKIERNIEWICE",
                    "count": 176
                },
                {
                    "_id": "ZABRZE",
                    "count": 231
                },
                {
                    "_id": "HAJNOWSKI",
                    "count": 47
                },
                {
                    "_id": "SZTUMSKI",
                    "count": 63
                },
                {
                    "_id": "SOSNOWIEC",
                    "count": 317
                },
                {
                    "_id": "TUCHOLSKI",
                    "count": 80
                },
                {
                    "_id": "WSCHOWSKI",
                    "count": 54
                },
                {
                    "_id": "GDYNIA",
                    "count": 409
                },
                {
                    "_id": "PILSKI",
                    "count": 514
                },
                {
                    "_id": "OPOLSKI",
                    "count": 263
                },
                {
                    "_id": "TRZEBNICKI",
                    "count": 123
                },
                {
                    "_id": "ZGIERSKI",
                    "count": 536
                },
                {
                    "_id": "ŁASKI",
                    "count": 108
                },
                {
                    "_id": "KOZIENICKI",
                    "count": 195
                },
                {
                    "_id": "LUBLIN",
                    "count": 574
                },
                {
                    "_id": "ZĄBKOWICKI",
                    "count": 65
                },
                {
                    "_id": "GIŻYCKI",
                    "count": 52
                },
                {
                    "_id": "SIERPECKI",
                    "count": 241
                },
                {
                    "_id": "ŻARSKI",
                    "count": 151
                },
                {
                    "_id": "LIMANOWSKI",
                    "count": 145
                },
                {
                    "_id": "OLKUSKI",
                    "count": 156
                },
                {
                    "_id": "WAŁBRZYSKI",
                    "count": 103
                },
                {
                    "_id": "RADOM",
                    "count": 344
                },
                {
                    "_id": "GŁUBCZYCKI",
                    "count": 58
                },
                {
                    "_id": "TOMASZOWSKI",
                    "count": 404
                },
                {
                    "_id": "BIALSKI",
                    "count": 60
                },
                {
                    "_id": "KRASNOSTAWSKI",
                    "count": 111
                },
                {
                    "_id": "OTWOCKI",
                    "count": 202
                },
                {
                    "_id": "BIAŁOSTOCKI",
                    "count": 76
                },
                {
                    "_id": "LEGNICKI",
                    "count": 55
                },
                {
                    "_id": "BRZOZOWSKI",
                    "count": 23
                },
                {
                    "_id": "ZIELONA GÓRA",
                    "count": 171
                },
                {
                    "_id": "ŻNIŃSKI",
                    "count": 116
                },
                {
                    "_id": "ŚWIEBODZIŃSKI",
                    "count": 49
                },
                {
                    "_id": "MIKOŁOWSKI",
                    "count": 108
                },
                {
                    "_id": "NOWOMIEJSKI",
                    "count": 167
                },
                {
                    "_id": "KRAKOWSKI",
                    "count": 304
                },
                {
                    "_id": "GRUDZIĄDZKI",
                    "count": 163
                },
                {
                    "_id": "ELBLĄG",
                    "count": 283
                },
                {
                    "_id": "WĘGROWSKI",
                    "count": 64
                },
                {
                    "_id": "OLEŚNICKI",
                    "count": 230
                },
                {
                    "_id": "WRZESIŃSKI",
                    "count": 124
                },
                {
                    "_id": "KROSNO",
                    "count": 28
                },
                {
                    "_id": "GOLENIOWSKI",
                    "count": 187
                },
                {
                    "_id": "SIEMIANOWICE ŚLĄSKIE",
                    "count": 60
                },
                {
                    "_id": "KAZIMIERSKI",
                    "count": 124
                },
                {
                    "_id": "GRYFIŃSKI",
                    "count": 137
                },
                {
                    "_id": "WAŁECKI",
                    "count": 115
                },
                {
                    "_id": "ŚWINOUJŚCIE",
                    "count": 54
                },
                {
                    "_id": "MIĘDZYRZECKI",
                    "count": 81
                },
                {
                    "_id": "LEGIONOWSKI",
                    "count": 307
                },
                {
                    "_id": "PIEKARY ŚLĄSKIE",
                    "count": 27
                },
                {
                    "_id": "BUSKI",
                    "count": 181
                },
                {
                    "_id": "GNIEŹNIEŃSKI",
                    "count": 380
                },
                {
                    "_id": "RAWICKI",
                    "count": 230
                },
                {
                    "_id": "GDAŃSK",
                    "count": 734
                },
                {
                    "_id": "LESZCZYŃSKI",
                    "count": 118
                },
                {
                    "_id": "LEGNICA",
                    "count": 125
                },
                {
                    "_id": "TARNÓW",
                    "count": 85
                },
                {
                    "_id": "CHOJNICKI",
                    "count": 110
                },
                {
                    "_id": "OSTROŁĘKA",
                    "count": 146
                },
                {
                    "_id": "ŻAGAŃSKI",
                    "count": 95
                },
                {
                    "_id": "STRZELIŃSKI",
                    "count": 64
                },
                {
                    "_id": "KALISZ",
                    "count": 231
                },
                {
                    "_id": "SZCZECINECKI",
                    "count": 130
                },
                {
                    "_id": "KAMIEŃSKI",
                    "count": 76
                },
                {
                    "_id": "GRUDZIĄDZ",
                    "count": 245
                },
                {
                    "_id": "PABIANICKI",
                    "count": 255
                },
                {
                    "_id": "CHODZIESKI",
                    "count": 88
                },
                {
                    "_id": "ZDUŃSKOWOLSKI",
                    "count": 200
                },
                {
                    "_id": "OSTRÓDZKI",
                    "count": 267
                },
                {
                    "_id": "WOŁOMIŃSKI",
                    "count": 427
                },
                {
                    "_id": "PIŃCZOWSKI",
                    "count": 102
                },
                {
                    "_id": "WŁOSZCZOWSKI",
                    "count": 104
                },
                {
                    "_id": "BIELSKO-BIAŁA",
                    "count": 165
                },
                {
                    "_id": "SIERADZKI",
                    "count": 261
                },
                {
                    "_id": "ŚWIĘTOCHŁOWICE",
                    "count": 48
                },
                {
                    "_id": "GRÓJECKI",
                    "count": 270
                },
                {
                    "_id": "KUTNOWSKI",
                    "count": 365
                },
                {
                    "_id": "PŁOCK",
                    "count": 458
                },
                {
                    "_id": "NOWOTARSKI",
                    "count": 90
                },
                {
                    "_id": "GŁOGOWSKI",
                    "count": 142
                },
                {
                    "_id": "KATOWICE",
                    "count": 345
                },
                {
                    "_id": "DZIERŻONIOWSKI",
                    "count": 155
                },
                {
                    "_id": "PUŁAWSKI",
                    "count": 219
                },
                {
                    "_id": "PISKI",
                    "count": 53
                },
                {
                    "_id": "WODZISŁAWSKI",
                    "count": 195
                },
                {
                    "_id": "TATRZAŃSKI",
                    "count": 33
                },
                {
                    "_id": "GOLUBSKO-DOBRZYŃSKI",
                    "count": 209
                },
                {
                    "_id": "ŁOMŻYŃSKI",
                    "count": 18
                },
                {
                    "_id": "MALBORSKI",
                    "count": 86
                },
                {
                    "_id": "BIAŁYSTOK",
                    "count": 117
                },
                {
                    "_id": "WIERUSZOWSKI",
                    "count": 31
                },
                {
                    "_id": "KRAPKOWICKI",
                    "count": 46
                },
                {
                    "_id": "LUBLINIECKI",
                    "count": 55
                },
                {
                    "_id": "CIECHANOWSKI",
                    "count": 547
                },
                {
                    "_id": "ZŁOTOWSKI",
                    "count": 292
                },
                {
                    "_id": "TORUŃSKI",
                    "count": 509
                },
                {
                    "_id": "OŚWIĘCIMSKI",
                    "count": 147
                },
                {
                    "_id": "BYDGOSKI",
                    "count": 229
                },
                {
                    "_id": "SOPOT",
                    "count": 47
                },
                {
                    "_id": "RAWSKI",
                    "count": 122
                },
                {
                    "_id": "OSTROWIECKI",
                    "count": 397
                },
                {
                    "_id": "KONIN",
                    "count": 150
                },
                {
                    "_id": "JASIELSKI",
                    "count": 97
                },
                {
                    "_id": "KONIŃSKI",
                    "count": 378
                },
                {
                    "_id": "BOCHEŃSKI",
                    "count": 133
                },
                {
                    "_id": "POLKOWICKI",
                    "count": 138
                },
                {
                    "_id": "GRODZISKI",
                    "count": 277
                },
                {
                    "_id": "WEJHEROWSKI",
                    "count": 294
                },
                {
                    "_id": "CHEŁMIŃSKI",
                    "count": 164
                },
                {
                    "_id": "BYTOM",
                    "count": 211
                },
                {
                    "_id": "LUBACZOWSKI",
                    "count": 28
                },
                {
                    "_id": "OLESKI",
                    "count": 59
                },
                {
                    "_id": "TARNOBRZESKI",
                    "count": 31
                },
                {
                    "_id": "SZYDŁOWIECKI",
                    "count": 42
                },
                {
                    "_id": "GOŁDAPSKI",
                    "count": 53
                },
                {
                    "_id": "DĄBROWA GÓRNICZA",
                    "count": 243
                },
                {
                    "_id": "BRANIEWSKI",
                    "count": 73
                },
                {
                    "_id": "BYDGOSZCZ",
                    "count": 689
                },
                {
                    "_id": "SŁUPECKI",
                    "count": 92
                },
                {
                    "_id": "DĘBICKI",
                    "count": 94
                },
                {
                    "_id": "RZESZOWSKI",
                    "count": 125
                },
                {
                    "_id": "POZNAŃ",
                    "count": 653
                },
                {
                    "_id": "WĄBRZESKI",
                    "count": 92
                },
                {
                    "_id": "WADOWICKI",
                    "count": 171
                },
                {
                    "_id": "SOKÓLSKI",
                    "count": 10
                },
                {
                    "_id": "ŁÓDZKI WSCHODNI",
                    "count": 138
                },
                {
                    "_id": "RADZIEJOWSKI",
                    "count": 88
                },
                {
                    "_id": "PŁOCKI",
                    "count": 414
                },
                {
                    "_id": "JASTRZĘBIE-ZDRÓJ",
                    "count": 148
                },
                {
                    "_id": "SANDOMIERSKI",
                    "count": 145
                },
                {
                    "_id": "PODDĘBICKI",
                    "count": 104
                },
                {
                    "_id": "SŁUPSKI",
                    "count": 160
                },
                {
                    "_id": "STARGARDZKI",
                    "count": 212
                },
                {
                    "_id": "WĘGORZEWSKI",
                    "count": 19
                },
                {
                    "_id": "ZAMBROWSKI",
                    "count": 25
                },
                {
                    "_id": "BIELSKI",
                    "count": 197
                },
                {
                    "_id": "PUŁTUSKI",
                    "count": 191
                },
                {
                    "_id": "RYBNICKI",
                    "count": 67
                },
                {
                    "_id": "PRUSZKOWSKI",
                    "count": 386
                },
                {
                    "_id": "STASZOWSKI",
                    "count": 149
                },
                {
                    "_id": "SZCZECIN",
                    "count": 597
                },
                {
                    "_id": "ŚREMSKI",
                    "count": 95
                },
                {
                    "_id": "NOWY SĄCZ",
                    "count": 46
                },
                {
                    "_id": "KRAŚNICKI",
                    "count": 189
                },
                {
                    "_id": "STRZELECKI",
                    "count": 53
                },
                {
                    "_id": "PRZEWORSKI",
                    "count": 21
                },
                {
                    "_id": "RZESZÓW",
                    "count": 172
                },
                {
                    "_id": "CZĘSTOCHOWSKI",
                    "count": 169
                },
                {
                    "_id": "KOSZALIŃSKI",
                    "count": 110
                },
                {
                    "_id": "NAMYSŁOWSKI",
                    "count": 50
                },
                {
                    "_id": "ŚWIDWIŃSKI",
                    "count": 80
                },
                {
                    "_id": "CHEŁMSKI",
                    "count": 121
                },
                {
                    "_id": "IŁAWSKI",
                    "count": 373
                },
                {
                    "_id": "CZĘSTOCHOWA",
                    "count": 371
                },
                {
                    "_id": "KWIDZYŃSKI",
                    "count": 140
                },
                {
                    "_id": "WIELICKI",
                    "count": 235
                },
                {
                    "_id": "LUBARTOWSKI",
                    "count": 169
                },
                {
                    "_id": "GORLICKI",
                    "count": 117
                },
                {
                    "_id": "GLIWICKI",
                    "count": 135
                },
                {
                    "_id": "SUWAŁKI",
                    "count": 31
                },
                {
                    "_id": "GORZOWSKI",
                    "count": 93
                },
                {
                    "_id": "SIEMIATYCKI",
                    "count": 16
                },
                {
                    "_id": "ŻORY",
                    "count": 54
                },
                {
                    "_id": "PROSZOWICKI",
                    "count": 85
                },
                {
                    "_id": "BARTOSZYCKI",
                    "count": 76
                },
                {
                    "_id": "KĘTRZYŃSKI",
                    "count": 122
                },
                {
                    "_id": "KŁOBUCKI",
                    "count": 82
                },
                {
                    "_id": "OLSZTYN",
                    "count": 337
                },
                {
                    "_id": "ŁÓDŹ",
                    "count": 1706
                },
                {
                    "_id": "TORUŃ",
                    "count": 707
                },
                {
                    "_id": "TARNOBRZEG",
                    "count": 60
                },
                {
                    "_id": "WAŁBRZYCH",
                    "count": 195
                },
                {
                    "_id": "RADZYŃSKI",
                    "count": 73
                },
                {
                    "_id": "SIEDLECKI",
                    "count": 21
                },
                {
                    "_id": "MONIECKI",
                    "count": 9
                },
                {
                    "_id": "PSZCZYŃSKI",
                    "count": 69
                },
                {
                    "_id": "NIDZICKI",
                    "count": 125
                },
                {
                    "_id": "MIECHOWSKI",
                    "count": 155
                },
                {
                    "_id": "LUBIŃSKI",
                    "count": 159
                },
                {
                    "_id": "KROŚNIEŃSKI",
                    "count": 158
                },
                {
                    "_id": "PIOTRKOWSKI",
                    "count": 350
                },
                {
                    "_id": "SŁUBICKI",
                    "count": 79
                },
                {
                    "_id": "SIEDLCE",
                    "count": 48
                },
                {
                    "_id": "TYCHY",
                    "count": 165
                },
                {
                    "_id": "OBORNICKI",
                    "count": 116
                },
                {
                    "_id": "PRZEMYŚL",
                    "count": 102
                },
                {
                    "_id": "OPOLE",
                    "count": 172
                },
                {
                    "_id": "KRAKÓW",
                    "count": 1027
                },
                {
                    "_id": "DRAWSKI",
                    "count": 102
                },
                {
                    "_id": "KOŁOBRZESKI",
                    "count": 122
                },
                {
                    "_id": "ŁOBESKI",
                    "count": 31
                },
                {
                    "_id": "BYTOWSKI",
                    "count": 71
                },
                {
                    "_id": "RYPIŃSKI",
                    "count": 64
                },
                {
                    "_id": "WROCŁAW",
                    "count": 982
                },
                {
                    "_id": "LESZNO",
                    "count": 121
                },
                {
                    "_id": "KALISKI",
                    "count": 131
                },
                {
                    "_id": "BRZESKI",
                    "count": 150
                },
                {
                    "_id": "WŁOCŁAWSKI",
                    "count": 147
                },
                {
                    "_id": "NIŻAŃSKI",
                    "count": 62
                },
                {
                    "_id": "PARCZEWSKI",
                    "count": 41
                },
                {
                    "_id": "PIASECZYŃSKI",
                    "count": 363
                },
                {
                    "_id": "MŁAWSKI",
                    "count": 362
                },
                {
                    "_id": "WYSZKOWSKI",
                    "count": 229
                },
                {
                    "_id": "JAWORZNO",
                    "count": 121
                },
                {
                    "_id": "RADOMSZCZAŃSKI",
                    "count": 446
                },
                {
                    "_id": "WARSZAWA",
                    "count": 3539
                },
                {
                    "_id": "NYSKI",
                    "count": 202
                },
                {
                    "_id": "JĘDRZEJOWSKI",
                    "count": 314
                },
                {
                    "_id": "WOLSZTYŃSKI",
                    "count": 63
                },
                {
                    "_id": "BIESZCZADZKI",
                    "count": 16
                },
                {
                    "_id": "NOWOSOLSKI",
                    "count": 136
                },
                {
                    "_id": "ŁOWICKI",
                    "count": 211
                },
                {
                    "_id": "BEŁCHATOWSKI",
                    "count": 375
                },
                {
                    "_id": "KLUCZBORSKI",
                    "count": 58
                },
                {
                    "_id": "GÓROWSKI",
                    "count": 54
                },
                {
                    "_id": "PRUDNICKI",
                    "count": 83
                },
                {
                    "_id": "BOLESŁAWIECKI",
                    "count": 98
                },
                {
                    "_id": "PAJĘCZAŃSKI",
                    "count": 156
                },
                {
                    "_id": "LWÓWECKI",
                    "count": 84
                },
                {
                    "_id": "NOWOSĄDECKI",
                    "count": 107
                },
                {
                    "_id": "SOKOŁOWSKI",
                    "count": 40
                },
                {
                    "_id": "MIELECKI",
                    "count": 148
                },
                {
                    "_id": "PRZEMYSKI",
                    "count": 78
                },
                {
                    "_id": "PUCKI",
                    "count": 110
                },
                {
                    "_id": "TARNOGÓRSKI",
                    "count": 152
                },
                {
                    "_id": "HRUBIESZOWSKI",
                    "count": 119
                },
                {
                    "_id": "MAKOWSKI",
                    "count": 85
                },
                {
                    "_id": "SZAMOTULSKI",
                    "count": 138
                },
                {
                    "_id": "BRODNICKI",
                    "count": 306
                },
                {
                    "_id": "BĘDZIŃSKI",
                    "count": 192
                },
                {
                    "_id": "CZARNKOWSKO-TRZCIANECKI",
                    "count": 119
                },
                {
                    "_id": "BIAŁOGARDZKI",
                    "count": 66
                },
                {
                    "_id": "GRYFICKI",
                    "count": 101
                },
                {
                    "_id": "PYRZYCKI",
                    "count": 92
                },
                {
                    "_id": "KOŚCIERSKI",
                    "count": 43
                },
                {
                    "_id": "AUGUSTOWSKI",
                    "count": 17
                },
                {
                    "_id": "WROCŁAWSKI",
                    "count": 206
                },
                {
                    "_id": "ŁĘCZYŃSKI",
                    "count": 163
                },
                {
                    "_id": "OSTROWSKI",
                    "count": 355
                },
                {
                    "_id": "OLECKI",
                    "count": 11
                },
                {
                    "_id": "MIĘDZYCHODZKI",
                    "count": 56
                },
                {
                    "_id": "ZAMOJSKI",
                    "count": 160
                },
                {
                    "_id": "ZAMOŚĆ",
                    "count": 111
                },
                {
                    "_id": "LUBELSKI",
                    "count": 267
                },
                {
                    "_id": "ŁAŃCUCKI",
                    "count": 30
                },
                {
                    "_id": "LIDZBARSKI",
                    "count": 66
                },
                {
                    "_id": "ŻUROMIŃSKI",
                    "count": 237
                },
                {
                    "_id": "JAROSŁAWSKI",
                    "count": 79
                },
                {
                    "_id": "GLIWICE",
                    "count": 230
                },
                {
                    "_id": "KROTOSZYŃSKI",
                    "count": 148
                },
                {
                    "_id": "PLESZEWSKI",
                    "count": 103
                },
                {
                    "_id": "PIOTRKÓW TRYBUNALSKI",
                    "count": 234
                },
                {
                    "_id": "JAWORSKI",
                    "count": 98
                },
                {
                    "_id": "KIELECKI",
                    "count": 509
                }
            ])
            done()
        }).catch(err=>done(err))
    })

    it('OK, Simple GET request for communes', function (done){
        request(server).get("/api/communes/KOWALSKA")
        .auth('Authorization', 'Bearer ' + tokenKey)
        .then(res=>{
            expect(res.body).to.have.deep.members([
                {
                    "TERYT": "0201011",
                    "NUMBER": 51
                },
                {
                    "TERYT": "0201022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0201044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0201045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0201052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0201062",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0202011",
                    "NUMBER": 51
                },
                {
                    "TERYT": "0202021",
                    "NUMBER": 55
                },
                {
                    "TERYT": "0202034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0202035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0202041",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0202052",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0202062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0202074",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0202075",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0203011",
                    "NUMBER": 114
                },
                {
                    "TERYT": "0203022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0203032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0203042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0203052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0204014",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0204015",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0204022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0204032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0204044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0204045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0205011",
                    "NUMBER": 48
                },
                {
                    "TERYT": "0205024",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0205025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0205032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0205042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0205052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0205062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0206011",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0206021",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0206031",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0206041",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0206052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0206062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0206072",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0206082",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0206092",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0207011",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0207022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0207034",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0207035",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0207042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0208011",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0208021",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0208031",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0208041",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0208051",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0208064",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0208065",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0208072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0208084",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0208085",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0208092",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0208104",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0208105",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0208112",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0208124",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0208125",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0208134",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0208144",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0208145",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0209011",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0209022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0209032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0209042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0209052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0209062",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0210011",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0210021",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0210034",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0210035",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0210042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0210054",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0210055",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0210072",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0211011",
                    "NUMBER": 100
                },
                {
                    "TERYT": "0211022",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0211032",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0211044",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0211045",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0212014",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0212015",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0212024",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0212025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0212034",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0212035",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0212044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0212045",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0212054",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0212055",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0213012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0213022",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0213034",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0213035",
                    "NUMBER": 40
                },
                {
                    "TERYT": "0214011",
                    "NUMBER": 90
                },
                {
                    "TERYT": "0214024",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0214025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0214032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0214042",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0214054",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0214055",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0214062",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0214074",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0214075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0214084",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0214085",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0215011",
                    "NUMBER": 40
                },
                {
                    "TERYT": "0215022",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0215034",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0215035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0215042",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0216014",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0216015",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0216022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0216032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0216044",
                    "NUMBER": 37
                },
                {
                    "TERYT": "0216045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0216054",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0216055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0216062",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0217012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0217022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0217032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0217044",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0217045",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0217054",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0217055",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0218012",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0218022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0218032",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0218044",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0218045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0218052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0219011",
                    "NUMBER": 95
                },
                {
                    "TERYT": "0219021",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0219032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0219044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0219045",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0219052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0219064",
                    "NUMBER": 31
                },
                {
                    "TERYT": "0219065",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0219072",
                    "NUMBER": 33
                },
                {
                    "TERYT": "0219084",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0220014",
                    "NUMBER": 27
                },
                {
                    "TERYT": "0220015",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0220025",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0220034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0220035",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0220042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0220052",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0220064",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0220065",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0221011",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0221021",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0221031",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0221042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0221054",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0221064",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0221065",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0221072",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0221082",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0222014",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0222022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0222034",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0222035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0223012",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0223022",
                    "NUMBER": 78
                },
                {
                    "TERYT": "0223032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0223044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0223045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0223052",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0223062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0223074",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0223075",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0223084",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0223085",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0223092",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0224014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0224022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0224032",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0224042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0224054",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0224064",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0224065",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0224074",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0225011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0225021",
                    "NUMBER": 47
                },
                {
                    "TERYT": "0225034",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0225035",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0225044",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0225045",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0225052",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0225064",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0225065",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0225072",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0226011",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0226021",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0226032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0226044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0226045",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0226052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0226062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0261011",
                    "NUMBER": 134
                },
                {
                    "TERYT": "0262011",
                    "NUMBER": 125
                },
                {
                    "TERYT": "0264029",
                    "NUMBER": 313
                },
                {
                    "TERYT": "0264039",
                    "NUMBER": 297
                },
                {
                    "TERYT": "0264049",
                    "NUMBER": 162
                },
                {
                    "TERYT": "0264059",
                    "NUMBER": 75
                },
                {
                    "TERYT": "0264069",
                    "NUMBER": 135
                },
                {
                    "TERYT": "0265011",
                    "NUMBER": 195
                },
                {
                    "TERYT": "0401011",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0401021",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0401031",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0401042",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0401052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0401072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0401082",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0402011",
                    "NUMBER": 130
                },
                {
                    "TERYT": "0402022",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0402032",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0402042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0402054",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0402055",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0402062",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0402074",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0402075",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0402082",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0402092",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0402102",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0403012",
                    "NUMBER": 48
                },
                {
                    "TERYT": "0403022",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0403032",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0403044",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0403045",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0403052",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0403062",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0403072",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0403084",
                    "NUMBER": 38
                },
                {
                    "TERYT": "0403085",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0404011",
                    "NUMBER": 73
                },
                {
                    "TERYT": "0404022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0404032",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0404042",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0404052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0404062",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0404072",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0405011",
                    "NUMBER": 54
                },
                {
                    "TERYT": "0405022",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0405032",
                    "NUMBER": 54
                },
                {
                    "TERYT": "0405044",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0405045",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0405052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0405062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0406012",
                    "NUMBER": 65
                },
                {
                    "TERYT": "0406022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0406034",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0406035",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0406044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0406045",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0406052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0406062",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0407011",
                    "NUMBER": 181
                },
                {
                    "TERYT": "0407022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0407034",
                    "NUMBER": 37
                },
                {
                    "TERYT": "0407035",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0407042",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0407054",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0407055",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0407064",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0407065",
                    "NUMBER": 43
                },
                {
                    "TERYT": "0407074",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0407075",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0407082",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0407092",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0408011",
                    "NUMBER": 100
                },
                {
                    "TERYT": "0408022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0408032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0408044",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0408045",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0408052",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0408062",
                    "NUMBER": 68
                },
                {
                    "TERYT": "0408074",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0408075",
                    "NUMBER": 39
                },
                {
                    "TERYT": "0408082",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0408092",
                    "NUMBER": 41
                },
                {
                    "TERYT": "0409012",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0409022",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0409034",
                    "NUMBER": 51
                },
                {
                    "TERYT": "0409035",
                    "NUMBER": 67
                },
                {
                    "TERYT": "0409044",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0409045",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0410014",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0410015",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0410024",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0410025",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0410034",
                    "NUMBER": 49
                },
                {
                    "TERYT": "0410035",
                    "NUMBER": 40
                },
                {
                    "TERYT": "0410042",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0410054",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0410055",
                    "NUMBER": 51
                },
                {
                    "TERYT": "0411011",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0411022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0411032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0411042",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0411054",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0411055",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0411062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0411072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0412011",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0412022",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0412032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0412042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0412052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0412062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0413014",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0413015",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0413024",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0413025",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0413032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0413044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0413045",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0414012",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0414022",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0414032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0414042",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0414052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0414064",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0414065",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0414072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0414082",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0414094",
                    "NUMBER": 39
                },
                {
                    "TERYT": "0414095",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0414102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0414112",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0415011",
                    "NUMBER": 44
                },
                {
                    "TERYT": "0415022",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0415032",
                    "NUMBER": 72
                },
                {
                    "TERYT": "0415042",
                    "NUMBER": 102
                },
                {
                    "TERYT": "0415052",
                    "NUMBER": 40
                },
                {
                    "TERYT": "0415062",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0415072",
                    "NUMBER": 138
                },
                {
                    "TERYT": "0415082",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0415092",
                    "NUMBER": 53
                },
                {
                    "TERYT": "0416012",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0416032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0416042",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0416052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0416064",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0416065",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0417011",
                    "NUMBER": 45
                },
                {
                    "TERYT": "0417022",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0417032",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0417042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0417052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0418011",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0418022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0418032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0418044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0418045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0418052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0418064",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0418065",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0418072",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0418084",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0418085",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0418092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0418102",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0418115",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0418124",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0418132",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0419014",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0419015",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0419022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0419034",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0419044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0419045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0419052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0419064",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0419065",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0461011",
                    "NUMBER": 689
                },
                {
                    "TERYT": "0462011",
                    "NUMBER": 245
                },
                {
                    "TERYT": "0463011",
                    "NUMBER": 707
                },
                {
                    "TERYT": "0464011",
                    "NUMBER": 227
                },
                {
                    "TERYT": "0601011",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0601021",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0601032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0601052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0601082",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0601102",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0601122",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0601142",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0601162",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0602011",
                    "NUMBER": 27
                },
                {
                    "TERYT": "0602032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0602042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0602062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0602092",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0602102",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0602112",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0602124",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0602142",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0603011",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0603022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0603032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0603042",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0603052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0603062",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0603072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0603082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0603092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0603102",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0603115",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0603122",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0603132",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0603142",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0603154",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0603155",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0604011",
                    "NUMBER": 35
                },
                {
                    "TERYT": "0604022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0604032",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0604042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0604052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0604062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0604082",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0605012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0605054",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0605065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0605072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0606011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "0606022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0606032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0606042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0606052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0606062",
                    "NUMBER": 31
                },
                {
                    "TERYT": "0606072",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0606102",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0607011",
                    "NUMBER": 71
                },
                {
                    "TERYT": "0607032",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0607042",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0607052",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0607072",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0607084",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0607085",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0607092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0607102",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0608011",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0608022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0608032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0608042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0608052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0608064",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0608072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0608082",
                    "NUMBER": 57
                },
                {
                    "TERYT": "0608092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0608104",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0608112",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0608122",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0609014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0609015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0609034",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0609035",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0609042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0609052",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0609062",
                    "NUMBER": 36
                },
                {
                    "TERYT": "0609072",
                    "NUMBER": 56
                },
                {
                    "TERYT": "0609082",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0609102",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0609112",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0609122",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0609132",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0609142",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0609152",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0609162",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0610012",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0610022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0610034",
                    "NUMBER": 49
                },
                {
                    "TERYT": "0610035",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0610042",
                    "NUMBER": 47
                },
                {
                    "TERYT": "0610052",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0610062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0611011",
                    "NUMBER": 38
                },
                {
                    "TERYT": "0611042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0611052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0611062",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0611072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0611082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0611092",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0611102",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0611112",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0612012",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0612025",
                    "NUMBER": 20
                },
                {
                    "TERYT": "0612032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0612042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0612054",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0612055",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0612064",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0612065",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0612072",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0613012",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0613022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0613032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0613044",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0613045",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0613052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0613062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0614011",
                    "NUMBER": 97
                },
                {
                    "TERYT": "0614032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0614044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0614045",
                    "NUMBER": 29
                },
                {
                    "TERYT": "0614052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0614062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0614072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0614084",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0614085",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0614092",
                    "NUMBER": 16
                },
                {
                    "TERYT": "0614102",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0614112",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0615011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "0615032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0615042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0615062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0615072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0615082",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0616011",
                    "NUMBER": 27
                },
                {
                    "TERYT": "0616022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0616044",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0616045",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0616052",
                    "NUMBER": 45
                },
                {
                    "TERYT": "0617011",
                    "NUMBER": 65
                },
                {
                    "TERYT": "0617022",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0617034",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0617035",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0617052",
                    "NUMBER": 21
                },
                {
                    "TERYT": "0618011",
                    "NUMBER": 35
                },
                {
                    "TERYT": "0618032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0618042",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0618064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0618065",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0618072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0618082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0618102",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0618112",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0618124",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0618125",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0618132",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0619011",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0619032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0619052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0619062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0619072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0619082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0620012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0620032",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0620045",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0620052",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0620062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0620072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0620092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0620102",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0620112",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0620122",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0620134",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0620135",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0620142",
                    "NUMBER": 35
                },
                {
                    "TERYT": "0620154",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0620155",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0661011",
                    "NUMBER": 26
                },
                {
                    "TERYT": "0662011",
                    "NUMBER": 102
                },
                {
                    "TERYT": "0663011",
                    "NUMBER": 574
                },
                {
                    "TERYT": "0664011",
                    "NUMBER": 111
                },
                {
                    "TERYT": "0801011",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0801022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0801032",
                    "NUMBER": 19
                },
                {
                    "TERYT": "0801042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0801052",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0801062",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0801074",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0801075",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0802011",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0802022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0802042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0802052",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0802064",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0802065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0802072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0803012",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0803024",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0803025",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0803032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0803042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0803054",
                    "NUMBER": 23
                },
                {
                    "TERYT": "0803055",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0803064",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0804011",
                    "NUMBER": 70
                },
                {
                    "TERYT": "0804024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0804044",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0804045",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0804052",
                    "NUMBER": 13
                },
                {
                    "TERYT": "0804064",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0804065",
                    "NUMBER": 15
                },
                {
                    "TERYT": "0804075",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0804082",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0805015",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0805022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0805034",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0805035",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0805044",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0805054",
                    "NUMBER": 34
                },
                {
                    "TERYT": "0805055",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0806014",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0806015",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0806024",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0806025",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0806032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0806044",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0806045",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0806052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0807012",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0807025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0807032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0807044",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0807045",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0807054",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0807055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0808012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0808022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0808032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0808054",
                    "NUMBER": 17
                },
                {
                    "TERYT": "0808055",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0808064",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0808065",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0809014",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0809022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "0809034",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0809035",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0809044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "0809054",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0809064",
                    "NUMBER": 24
                },
                {
                    "TERYT": "0809065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0809072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "0809092",
                    "NUMBER": 5
                },
                {
                    "TERYT": "0810011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0810021",
                    "NUMBER": 37
                },
                {
                    "TERYT": "0810032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0810044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0810045",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0810062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0810074",
                    "NUMBER": 9
                },
                {
                    "TERYT": "0810075",
                    "NUMBER": 4
                },
                {
                    "TERYT": "0810082",
                    "NUMBER": 11
                },
                {
                    "TERYT": "0810092",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0811021",
                    "NUMBER": 30
                },
                {
                    "TERYT": "0811032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0811045",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0811052",
                    "NUMBER": 18
                },
                {
                    "TERYT": "0811064",
                    "NUMBER": 22
                },
                {
                    "TERYT": "0811065",
                    "NUMBER": 10
                },
                {
                    "TERYT": "0811072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0811082",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0811092",
                    "NUMBER": 14
                },
                {
                    "TERYT": "0811102",
                    "NUMBER": 25
                },
                {
                    "TERYT": "0812024",
                    "NUMBER": 2
                },
                {
                    "TERYT": "0812025",
                    "NUMBER": 12
                },
                {
                    "TERYT": "0812034",
                    "NUMBER": 32
                },
                {
                    "TERYT": "0812035",
                    "NUMBER": 8
                },
                {
                    "TERYT": "0861011",
                    "NUMBER": 222
                },
                {
                    "TERYT": "0862011",
                    "NUMBER": 171
                },
                {
                    "TERYT": "1001011",
                    "NUMBER": 192
                },
                {
                    "TERYT": "1001022",
                    "NUMBER": 62
                },
                {
                    "TERYT": "1001032",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1001042",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1001052",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1001062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1001072",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1001084",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1001085",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1002011",
                    "NUMBER": 152
                },
                {
                    "TERYT": "1002022",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1002032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1002044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1002045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1002052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1002062",
                    "NUMBER": 43
                },
                {
                    "TERYT": "1002072",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1002082",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1002092",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1002102",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1002114",
                    "NUMBER": 47
                },
                {
                    "TERYT": "1002115",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1003012",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1003024",
                    "NUMBER": 40
                },
                {
                    "TERYT": "1003025",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1003032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1003042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1003052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1004011",
                    "NUMBER": 82
                },
                {
                    "TERYT": "1004022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1004032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1004042",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1004052",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1004062",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1004072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1004082",
                    "NUMBER": 38
                },
                {
                    "TERYT": "1005011",
                    "NUMBER": 58
                },
                {
                    "TERYT": "1005022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1005032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1005042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1005052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1005062",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1005072",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1005082",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1005092",
                    "NUMBER": 54
                },
                {
                    "TERYT": "1005102",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1006022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1006032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1006074",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1006075",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1006082",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1006104",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1006105",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1006114",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1006115",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1007012",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1007024",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1007025",
                    "NUMBER": 52
                },
                {
                    "TERYT": "1007032",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1007044",
                    "NUMBER": 66
                },
                {
                    "TERYT": "1007045",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1007052",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1007062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1007072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1007082",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1008011",
                    "NUMBER": 57
                },
                {
                    "TERYT": "1008021",
                    "NUMBER": 130
                },
                {
                    "TERYT": "1008032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1008042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1008052",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1008062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1008072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1009014",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1009015",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1009022",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1009032",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1009044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1009045",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1009052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1009062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1009072",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1009082",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1010012",
                    "NUMBER": 40
                },
                {
                    "TERYT": "1010022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1010032",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1010042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1010052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1010062",
                    "NUMBER": 38
                },
                {
                    "TERYT": "1010072",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1010082",
                    "NUMBER": 63
                },
                {
                    "TERYT": "1010094",
                    "NUMBER": 50
                },
                {
                    "TERYT": "1010095",
                    "NUMBER": 57
                },
                {
                    "TERYT": "1010102",
                    "NUMBER": 36
                },
                {
                    "TERYT": "1010114",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1010115",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1011022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1011034",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1011035",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1011044",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1011045",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1011052",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1011062",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1012011",
                    "NUMBER": 166
                },
                {
                    "TERYT": "1012022",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1012032",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1012042",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1012054",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1012055",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1012062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1012072",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1012082",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1012092",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1012102",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1012114",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1012115",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1012122",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1012132",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1012142",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1013011",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1013024",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1013025",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1013042",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1013052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1013062",
                    "NUMBER": 40
                },
                {
                    "TERYT": "1014011",
                    "NUMBER": 92
                },
                {
                    "TERYT": "1014024",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1014025",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1014032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1014042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1014052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1014062",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1014072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1014082",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1014094",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1014095",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1014102",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1014114",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1014115",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1015012",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1015022",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1015032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1015042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1015052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1015062",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1015072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1015082",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1015092",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1016011",
                    "NUMBER": 153
                },
                {
                    "TERYT": "1016032",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1016042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1016052",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1016062",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1016072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1016092",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1016102",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1016112",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1017012",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1017022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1017032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1017042",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1017052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1017062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1017082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1017094",
                    "NUMBER": 39
                },
                {
                    "TERYT": "1017095",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1018042",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1018052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1018062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1018074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1018075",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1019011",
                    "NUMBER": 119
                },
                {
                    "TERYT": "1019024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1019025",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1019032",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1019042",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1020011",
                    "NUMBER": 60
                },
                {
                    "TERYT": "1020021",
                    "NUMBER": 69
                },
                {
                    "TERYT": "1020031",
                    "NUMBER": 180
                },
                {
                    "TERYT": "1020044",
                    "NUMBER": 62
                },
                {
                    "TERYT": "1020045",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1020052",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1020062",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1020072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1020084",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1020085",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1020092",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1021011",
                    "NUMBER": 68
                },
                {
                    "TERYT": "1021022",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1021032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1021042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1021052",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1061029",
                    "NUMBER": 472
                },
                {
                    "TERYT": "1061039",
                    "NUMBER": 422
                },
                {
                    "TERYT": "1061049",
                    "NUMBER": 294
                },
                {
                    "TERYT": "1061059",
                    "NUMBER": 168
                },
                {
                    "TERYT": "1061069",
                    "NUMBER": 350
                },
                {
                    "TERYT": "1062011",
                    "NUMBER": 234
                },
                {
                    "TERYT": "1063011",
                    "NUMBER": 176
                },
                {
                    "TERYT": "1201011",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1201022",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1201032",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1201052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1201064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1201065",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1201072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1201082",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1201092",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1202012",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1202024",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1202025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1202052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1202072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1203014",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1203015",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1203022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1203034",
                    "NUMBER": 67
                },
                {
                    "TERYT": "1203035",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1203044",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1203045",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1203054",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1203055",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1204012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1204024",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1204032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1204052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1204062",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1204075",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1205011",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1205024",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1205025",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1205034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1205035",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1205042",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1205052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1205062",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1205072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1205092",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1206012",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1206022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1206032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1206042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1206052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1206064",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1206065",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1206072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1206082",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1206092",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1206104",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1206105",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1206114",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1206115",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1206124",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1206125",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1206132",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1206152",
                    "NUMBER": 74
                },
                {
                    "TERYT": "1206162",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1206172",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1207011",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1207021",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1207032",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1207042",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1207062",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1207072",
                    "NUMBER": 46
                },
                {
                    "TERYT": "1207082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1207092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1207102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1207112",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1207122",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1208012",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1208022",
                    "NUMBER": 69
                },
                {
                    "TERYT": "1208032",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1208042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1208054",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1208055",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1208062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1208072",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1209014",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1209015",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1209034",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1209035",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1209052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1209062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1210011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1210022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1210042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1210052",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1210074",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1210075",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1210082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1210092",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1210115",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1210122",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1210134",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1210135",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1210142",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1210152",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1210164",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1210165",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1211011",
                    "NUMBER": 50
                },
                {
                    "TERYT": "1211032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1211062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1211082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1211092",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1211112",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1211124",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1211125",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1211132",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1212011",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1212032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1212042",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1212054",
                    "NUMBER": 55
                },
                {
                    "TERYT": "1212055",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1212062",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1212074",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1212075",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1213011",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1213024",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1213025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1213034",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1213044",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1213045",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1213052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1213062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1213082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1213094",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1213095",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1214012",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1214025",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1214034",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1214035",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1214042",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1214054",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1214055",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1214062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1215011",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1215021",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1215032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1215052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1215064",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1215065",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1215082",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1215092",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1216015",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1216032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1216042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1216055",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1216064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1216065",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1216082",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1216092",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1216104",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1216105",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1216112",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1216122",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1216134",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1216154",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1216155",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1216162",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1217011",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1217032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1217042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1217052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1218014",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1218015",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1218022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1218034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1218035",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1218042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1218062",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1218072",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1218094",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1218095",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1218102",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1219012",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1219022",
                    "NUMBER": 56
                },
                {
                    "TERYT": "1219032",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1219044",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1219045",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1219054",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1219055",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1261011",
                    "NUMBER": 600
                },
                {
                    "TERYT": "1261029",
                    "NUMBER": 52
                },
                {
                    "TERYT": "1261039",
                    "NUMBER": 241
                },
                {
                    "TERYT": "1261049",
                    "NUMBER": 97
                },
                {
                    "TERYT": "1261059",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1262011",
                    "NUMBER": 46
                },
                {
                    "TERYT": "1263011",
                    "NUMBER": 85
                },
                {
                    "TERYT": "1401014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1401032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1401052",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1402011",
                    "NUMBER": 266
                },
                {
                    "TERYT": "1402022",
                    "NUMBER": 47
                },
                {
                    "TERYT": "1402034",
                    "NUMBER": 46
                },
                {
                    "TERYT": "1402035",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1402042",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1402052",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1402062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1402072",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1402082",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1402092",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1403011",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1403021",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1403032",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1403042",
                    "NUMBER": 72
                },
                {
                    "TERYT": "1403052",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1403062",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1403072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1403082",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1403092",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1403104",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1403105",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1403112",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1403132",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1403144",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1403145",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1404011",
                    "NUMBER": 49
                },
                {
                    "TERYT": "1404022",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1404032",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1404044",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1404045",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1404052",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1405011",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1405021",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1405032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1405044",
                    "NUMBER": 65
                },
                {
                    "TERYT": "1405045",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1405052",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1405062",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1406012",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1406022",
                    "NUMBER": 36
                },
                {
                    "TERYT": "1406032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1406042",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1406054",
                    "NUMBER": 47
                },
                {
                    "TERYT": "1406055",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1406062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1406074",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1406075",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1406084",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1406085",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1406092",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1406114",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1406115",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1407012",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1407022",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1407032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1407042",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1407054",
                    "NUMBER": 46
                },
                {
                    "TERYT": "1407055",
                    "NUMBER": 54
                },
                {
                    "TERYT": "1407062",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1407072",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1408011",
                    "NUMBER": 122
                },
                {
                    "TERYT": "1408022",
                    "NUMBER": 39
                },
                {
                    "TERYT": "1408032",
                    "NUMBER": 71
                },
                {
                    "TERYT": "1408044",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1408045",
                    "NUMBER": 39
                },
                {
                    "TERYT": "1408052",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1409022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1409034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1409035",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1409042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1409052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1409062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1410012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1410025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1411011",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1411022",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1411032",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1411042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1411062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1411074",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1411082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1411092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1411102",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1412011",
                    "NUMBER": 42
                },
                {
                    "TERYT": "1412042",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1412052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1412062",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1412074",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1412075",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1412082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1412094",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1412102",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1412112",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1412124",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1412125",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1412132",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1412142",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1412151",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1413011",
                    "NUMBER": 108
                },
                {
                    "TERYT": "1413022",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1413032",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1413042",
                    "NUMBER": 31
                },
                {
                    "TERYT": "1413052",
                    "NUMBER": 44
                },
                {
                    "TERYT": "1413062",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1413072",
                    "NUMBER": 41
                },
                {
                    "TERYT": "1413082",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1413092",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1413102",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1414011",
                    "NUMBER": 119
                },
                {
                    "TERYT": "1414022",
                    "NUMBER": 40
                },
                {
                    "TERYT": "1414032",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1414044",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1414045",
                    "NUMBER": 43
                },
                {
                    "TERYT": "1414052",
                    "NUMBER": 36
                },
                {
                    "TERYT": "1414064",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1414065",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1415012",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1415032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1415042",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1415052",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1415062",
                    "NUMBER": 39
                },
                {
                    "TERYT": "1415072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1415085",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1415092",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1415102",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1415112",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1416011",
                    "NUMBER": 50
                },
                {
                    "TERYT": "1416052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1416072",
                    "NUMBER": 54
                },
                {
                    "TERYT": "1416102",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1417011",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1417021",
                    "NUMBER": 95
                },
                {
                    "TERYT": "1417032",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1417044",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1417045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1417052",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1417062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1417082",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1418014",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1418015",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1418024",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1418025",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1418032",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1418044",
                    "NUMBER": 105
                },
                {
                    "TERYT": "1418045",
                    "NUMBER": 79
                },
                {
                    "TERYT": "1418052",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1418064",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1418065",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1419012",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1419022",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1419032",
                    "NUMBER": 51
                },
                {
                    "TERYT": "1419042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1419054",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1419055",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1419064",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1419065",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1419072",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1419082",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1419092",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1419102",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1419112",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1419122",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1419132",
                    "NUMBER": 49
                },
                {
                    "TERYT": "1419142",
                    "NUMBER": 55
                },
                {
                    "TERYT": "1419154",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1419155",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1420011",
                    "NUMBER": 142
                },
                {
                    "TERYT": "1420021",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1420032",
                    "NUMBER": 42
                },
                {
                    "TERYT": "1420042",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1420052",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1420062",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1420072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1420082",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1420092",
                    "NUMBER": 60
                },
                {
                    "TERYT": "1420102",
                    "NUMBER": 62
                },
                {
                    "TERYT": "1420112",
                    "NUMBER": 38
                },
                {
                    "TERYT": "1420122",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1421011",
                    "NUMBER": 45
                },
                {
                    "TERYT": "1421021",
                    "NUMBER": 119
                },
                {
                    "TERYT": "1421034",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1421035",
                    "NUMBER": 46
                },
                {
                    "TERYT": "1421042",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1421052",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1421062",
                    "NUMBER": 55
                },
                {
                    "TERYT": "1422011",
                    "NUMBER": 75
                },
                {
                    "TERYT": "1422024",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1422025",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1422032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1422042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1422052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1422062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1422072",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1423012",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1423022",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1423032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1423052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1423064",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1423065",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1423072",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1423082",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1424012",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1424022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1424032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1424044",
                    "NUMBER": 69
                },
                {
                    "TERYT": "1424045",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1424052",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1424062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1424072",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1425011",
                    "NUMBER": 45
                },
                {
                    "TERYT": "1425022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1425034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1425035",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1425042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1425052",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1425062",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1425072",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1425082",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1425092",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1425104",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1425105",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1425112",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1425122",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1425132",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1426022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1426032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1426042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1426082",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1426112",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1427011",
                    "NUMBER": 79
                },
                {
                    "TERYT": "1427022",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1427032",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1427042",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1427052",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1427062",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1427072",
                    "NUMBER": 47
                },
                {
                    "TERYT": "1428011",
                    "NUMBER": 127
                },
                {
                    "TERYT": "1428022",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1428032",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1428042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1428052",
                    "NUMBER": 27
                },
                {
                    "TERYT": "1428062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1428072",
                    "NUMBER": 52
                },
                {
                    "TERYT": "1428082",
                    "NUMBER": 43
                },
                {
                    "TERYT": "1429011",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1429032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1429042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1429055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1429092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1430012",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1430022",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1430054",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1430055",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1432014",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1432015",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1432022",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1432032",
                    "NUMBER": 36
                },
                {
                    "TERYT": "1432042",
                    "NUMBER": 56
                },
                {
                    "TERYT": "1432054",
                    "NUMBER": 37
                },
                {
                    "TERYT": "1432055",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1432064",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1432065",
                    "NUMBER": 54
                },
                {
                    "TERYT": "1432072",
                    "NUMBER": 51
                },
                {
                    "TERYT": "1433011",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1433022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1433032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1433042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1433054",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1433055",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1433062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1433072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1433082",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1433092",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1434011",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1434021",
                    "NUMBER": 74
                },
                {
                    "TERYT": "1434031",
                    "NUMBER": 56
                },
                {
                    "TERYT": "1434041",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1434052",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1434062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1434072",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1434082",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1434094",
                    "NUMBER": 35
                },
                {
                    "TERYT": "1434095",
                    "NUMBER": 42
                },
                {
                    "TERYT": "1434102",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1434114",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1434115",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1434124",
                    "NUMBER": 57
                },
                {
                    "TERYT": "1434125",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1435012",
                    "NUMBER": 40
                },
                {
                    "TERYT": "1435022",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1435032",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1435042",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1435054",
                    "NUMBER": 88
                },
                {
                    "TERYT": "1435055",
                    "NUMBER": 36
                },
                {
                    "TERYT": "1435062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1436012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1436022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1436032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1436054",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1437014",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1437015",
                    "NUMBER": 33
                },
                {
                    "TERYT": "1437022",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1437034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1437035",
                    "NUMBER": 45
                },
                {
                    "TERYT": "1437042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1437052",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1437064",
                    "NUMBER": 57
                },
                {
                    "TERYT": "1437065",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1438011",
                    "NUMBER": 172
                },
                {
                    "TERYT": "1438024",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1438025",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1438032",
                    "NUMBER": 42
                },
                {
                    "TERYT": "1438042",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1438052",
                    "NUMBER": 38
                },
                {
                    "TERYT": "1461011",
                    "NUMBER": 146
                },
                {
                    "TERYT": "1462011",
                    "NUMBER": 458
                },
                {
                    "TERYT": "1463011",
                    "NUMBER": 344
                },
                {
                    "TERYT": "1464011",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1465028",
                    "NUMBER": 252
                },
                {
                    "TERYT": "1465038",
                    "NUMBER": 257
                },
                {
                    "TERYT": "1465048",
                    "NUMBER": 320
                },
                {
                    "TERYT": "1465058",
                    "NUMBER": 427
                },
                {
                    "TERYT": "1465068",
                    "NUMBER": 170
                },
                {
                    "TERYT": "1465078",
                    "NUMBER": 351
                },
                {
                    "TERYT": "1465088",
                    "NUMBER": 133
                },
                {
                    "TERYT": "1465098",
                    "NUMBER": 32
                },
                {
                    "TERYT": "1465108",
                    "NUMBER": 220
                },
                {
                    "TERYT": "1465118",
                    "NUMBER": 265
                },
                {
                    "TERYT": "1465128",
                    "NUMBER": 110
                },
                {
                    "TERYT": "1465138",
                    "NUMBER": 268
                },
                {
                    "TERYT": "1465148",
                    "NUMBER": 177
                },
                {
                    "TERYT": "1465158",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1465168",
                    "NUMBER": 74
                },
                {
                    "TERYT": "1465178",
                    "NUMBER": 72
                },
                {
                    "TERYT": "1465188",
                    "NUMBER": 287
                },
                {
                    "TERYT": "1465198",
                    "NUMBER": 94
                },
                {
                    "TERYT": "1601011",
                    "NUMBER": 48
                },
                {
                    "TERYT": "1601022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1601034",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1601035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1601044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1601045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1601052",
                    "NUMBER": 26
                },
                {
                    "TERYT": "1601062",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1602015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1602022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1602034",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1602035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1602044",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1602045",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1603011",
                    "NUMBER": 74
                },
                {
                    "TERYT": "1603032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1603042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1603052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1603062",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1604014",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1604024",
                    "NUMBER": 21
                },
                {
                    "TERYT": "1604025",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1604032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1604044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1604045",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1605015",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1605024",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1605042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1605054",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1605055",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1606012",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1606024",
                    "NUMBER": 19
                },
                {
                    "TERYT": "1606025",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1606032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1606042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1606052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1607014",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1607015",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1607022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1607034",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1607035",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1607042",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1607054",
                    "NUMBER": 62
                },
                {
                    "TERYT": "1607055",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1607064",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1607065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1607074",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1607075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1607082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1607092",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1608014",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1608015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1608024",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1608025",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1608034",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1608035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1608044",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1608045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1608052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1608072",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1609012",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1609022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1609032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1609042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1609052",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1609062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1609074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1609075",
                    "NUMBER": 23
                },
                {
                    "TERYT": "1609084",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1609085",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1609092",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1609104",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1609105",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1609112",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1609124",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1609125",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1609132",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1610024",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1610025",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1610032",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1610044",
                    "NUMBER": 54
                },
                {
                    "TERYT": "1610045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1611012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1611022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1611035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1611044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1611054",
                    "NUMBER": 29
                },
                {
                    "TERYT": "1611055",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1611074",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1661011",
                    "NUMBER": 172
                },
                {
                    "TERYT": "1801052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1801084",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1801085",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1802014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1802015",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1802022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1802032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1802052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1802062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1803011",
                    "NUMBER": 30
                },
                {
                    "TERYT": "1803024",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1803025",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1803032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1803042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1803052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1803064",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1803065",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1803072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1804011",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1804021",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1804032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1804042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1804052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1804062",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1804075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1804082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1804092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1804102",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1804112",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1805011",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1805022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1805032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1805042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1805054",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1805055",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1805072",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1805082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1805092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1805112",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1806024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1806025",
                    "NUMBER": 17
                },
                {
                    "TERYT": "1806042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1806052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1807012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1807025",
                    "NUMBER": 22
                },
                {
                    "TERYT": "1807035",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1807044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1807045",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1807052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1807062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1807072",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1807084",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1807085",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1807092",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1808011",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1808022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1808042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1809011",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1809024",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1809025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1809032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1809042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1809054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1810011",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1810022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1810032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1810042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1811011",
                    "NUMBER": 91
                },
                {
                    "TERYT": "1811042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1811052",
                    "NUMBER": 38
                },
                {
                    "TERYT": "1811085",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1811092",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1811102",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1812032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "1812054",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1812055",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1812064",
                    "NUMBER": 20
                },
                {
                    "TERYT": "1812074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1812075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1813012",
                    "NUMBER": 14
                },
                {
                    "TERYT": "1813022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1813032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1813042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1813052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1813062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1813072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1813082",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1813092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1813102",
                    "NUMBER": 15
                },
                {
                    "TERYT": "1814011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1814042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1814055",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1814062",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1814082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1815012",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1815034",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1815035",
                    "NUMBER": 18
                },
                {
                    "TERYT": "1815044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1815045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1815052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1816011",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1816024",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1816025",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1816034",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1816035",
                    "NUMBER": 16
                },
                {
                    "TERYT": "1816042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1816064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1816065",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1816072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1816082",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1816092",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1816102",
                    "NUMBER": 24
                },
                {
                    "TERYT": "1816115",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1816122",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1816132",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1816144",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1817011",
                    "NUMBER": 39
                },
                {
                    "TERYT": "1817032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1817042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "1817052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1817074",
                    "NUMBER": 9
                },
                {
                    "TERYT": "1817075",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1817082",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1818011",
                    "NUMBER": 65
                },
                {
                    "TERYT": "1818022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1818032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "1818042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1818062",
                    "NUMBER": 11
                },
                {
                    "TERYT": "1819012",
                    "NUMBER": 4
                },
                {
                    "TERYT": "1819022",
                    "NUMBER": 25
                },
                {
                    "TERYT": "1819032",
                    "NUMBER": 34
                },
                {
                    "TERYT": "1819044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "1819045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1820014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1820022",
                    "NUMBER": 10
                },
                {
                    "TERYT": "1820032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "1820044",
                    "NUMBER": 13
                },
                {
                    "TERYT": "1821012",
                    "NUMBER": 7
                },
                {
                    "TERYT": "1821034",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1821035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "1861011",
                    "NUMBER": 28
                },
                {
                    "TERYT": "1862011",
                    "NUMBER": 102
                },
                {
                    "TERYT": "1863011",
                    "NUMBER": 172
                },
                {
                    "TERYT": "1864011",
                    "NUMBER": 60
                },
                {
                    "TERYT": "2001011",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2001032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2001072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2002015",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2002024",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2002042",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2002052",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2002064",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2002065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2002075",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2002095",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2002112",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2002134",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2002135",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2002145",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2003011",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2003062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2004011",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2004022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2004045",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2004054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2004055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2005011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2005022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2005032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2005062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2005092",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2006032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2006042",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2006054",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2007014",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2007022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2007032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2007052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2007072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2007092",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2008044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2008052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2008072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2009032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2010011",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2010032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2011014",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2011044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2011062",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2012052",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2012062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2013011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2013025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2013034",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2013082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2014011",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2014052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2061011",
                    "NUMBER": 117
                },
                {
                    "TERYT": "2062011",
                    "NUMBER": 52
                },
                {
                    "TERYT": "2063011",
                    "NUMBER": 31
                },
                {
                    "TERYT": "2201012",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2201024",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2201025",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2201064",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2201065",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2201072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2201092",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2201102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2202011",
                    "NUMBER": 62
                },
                {
                    "TERYT": "2202025",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2202032",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2202044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2202045",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2203011",
                    "NUMBER": 28
                },
                {
                    "TERYT": "2203024",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2203025",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2203032",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2203044",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2203045",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2203062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2203072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2204011",
                    "NUMBER": 41
                },
                {
                    "TERYT": "2204022",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2204032",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2204042",
                    "NUMBER": 36
                },
                {
                    "TERYT": "2204052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2204062",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2204072",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2204082",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2205024",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2205025",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2205042",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2205062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2205084",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2205085",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2206011",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2206032",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2206082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2207011",
                    "NUMBER": 52
                },
                {
                    "TERYT": "2207022",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2207032",
                    "NUMBER": 23
                },
                {
                    "TERYT": "2207044",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2207045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2207052",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2207062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2208011",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2208021",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2208032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2208042",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2208052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2209011",
                    "NUMBER": 52
                },
                {
                    "TERYT": "2209032",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2209042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2209074",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2209082",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2210011",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2210024",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2210025",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2210032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2210042",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2210052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2211025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2211031",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2211044",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2211045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2211052",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2211062",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2211072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2212011",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2212022",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2212032",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2212042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2212054",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2212055",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2212062",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2212072",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2212082",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2212092",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2212102",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2213014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2213021",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2213031",
                    "NUMBER": 98
                },
                {
                    "TERYT": "2213042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2213052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2213062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2213082",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2213094",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2213095",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2213102",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2213112",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2213122",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2213132",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2214011",
                    "NUMBER": 97
                },
                {
                    "TERYT": "2214024",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2214025",
                    "NUMBER": 26
                },
                {
                    "TERYT": "2214032",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2214044",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2214045",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2214052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2214062",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2215011",
                    "NUMBER": 38
                },
                {
                    "TERYT": "2215021",
                    "NUMBER": 86
                },
                {
                    "TERYT": "2215031",
                    "NUMBER": 82
                },
                {
                    "TERYT": "2215042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2215052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2215072",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2215082",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2215092",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2215102",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2216014",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2216015",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2216022",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2216032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2216042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2216054",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2216055",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2261011",
                    "NUMBER": 734
                },
                {
                    "TERYT": "2262011",
                    "NUMBER": 409
                },
                {
                    "TERYT": "2263011",
                    "NUMBER": 177
                },
                {
                    "TERYT": "2264011",
                    "NUMBER": 47
                },
                {
                    "TERYT": "2401011",
                    "NUMBER": 83
                },
                {
                    "TERYT": "2401021",
                    "NUMBER": 58
                },
                {
                    "TERYT": "2401031",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2401042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2401052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2401062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2401074",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2401075",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2401081",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2402032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2402044",
                    "NUMBER": 24
                },
                {
                    "TERYT": "2402045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2402052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2402062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2402072",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2402082",
                    "NUMBER": 90
                },
                {
                    "TERYT": "2402094",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2402095",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2402102",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2403011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2403021",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2403031",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2403042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2403052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2403062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2403072",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2403082",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2403104",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2403105",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2403122",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2404014",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2404015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2404022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2404032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2404042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2404052",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2404064",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2404065",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2404072",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2404082",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2404092",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2404102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2404112",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2404122",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2404132",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2404142",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2404152",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2405011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2405021",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2405032",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2405042",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2405052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2405064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2405065",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2405074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2406014",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2406015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2406024",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2406025",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2406032",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2406042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2406062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2406072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2406082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2406092",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2407011",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2407032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2407042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2407052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2407062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2407072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2407085",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2408011",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2408021",
                    "NUMBER": 36
                },
                {
                    "TERYT": "2408031",
                    "NUMBER": 43
                },
                {
                    "TERYT": "2408042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2408052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2409011",
                    "NUMBER": 49
                },
                {
                    "TERYT": "2409025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2409042",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2409055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2410032",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2410042",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2410054",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2410055",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2410062",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2411011",
                    "NUMBER": 60
                },
                {
                    "TERYT": "2411022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2411042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2411054",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2411055",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2411062",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2412014",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2412015",
                    "NUMBER": 24
                },
                {
                    "TERYT": "2412022",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2412042",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2412052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2413011",
                    "NUMBER": 31
                },
                {
                    "TERYT": "2413021",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2413031",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2413041",
                    "NUMBER": 75
                },
                {
                    "TERYT": "2413052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2413062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2413072",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2413092",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2414011",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2414021",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2414031",
                    "NUMBER": 30
                },
                {
                    "TERYT": "2414052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2415011",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2415021",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2415031",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2415041",
                    "NUMBER": 77
                },
                {
                    "TERYT": "2415052",
                    "NUMBER": 26
                },
                {
                    "TERYT": "2415062",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2415072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2415082",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2415092",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2416011",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2416021",
                    "NUMBER": 91
                },
                {
                    "TERYT": "2416032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2416042",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2416054",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2416055",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2416064",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2416065",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2416074",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2416075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2416084",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2416085",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2416092",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2416102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2417011",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2417022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2417032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2417062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2417072",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2417102",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2417112",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2417132",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2417152",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2461011",
                    "NUMBER": 165
                },
                {
                    "TERYT": "2462011",
                    "NUMBER": 211
                },
                {
                    "TERYT": "2463011",
                    "NUMBER": 120
                },
                {
                    "TERYT": "2464011",
                    "NUMBER": 371
                },
                {
                    "TERYT": "2465011",
                    "NUMBER": 243
                },
                {
                    "TERYT": "2466011",
                    "NUMBER": 230
                },
                {
                    "TERYT": "2467011",
                    "NUMBER": 148
                },
                {
                    "TERYT": "2468011",
                    "NUMBER": 121
                },
                {
                    "TERYT": "2469011",
                    "NUMBER": 345
                },
                {
                    "TERYT": "2470011",
                    "NUMBER": 147
                },
                {
                    "TERYT": "2471011",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2472011",
                    "NUMBER": 209
                },
                {
                    "TERYT": "2473011",
                    "NUMBER": 109
                },
                {
                    "TERYT": "2474011",
                    "NUMBER": 60
                },
                {
                    "TERYT": "2475011",
                    "NUMBER": 317
                },
                {
                    "TERYT": "2476011",
                    "NUMBER": 48
                },
                {
                    "TERYT": "2477011",
                    "NUMBER": 165
                },
                {
                    "TERYT": "2478011",
                    "NUMBER": 231
                },
                {
                    "TERYT": "2479011",
                    "NUMBER": 54
                },
                {
                    "TERYT": "2601014",
                    "NUMBER": 49
                },
                {
                    "TERYT": "2601015",
                    "NUMBER": 55
                },
                {
                    "TERYT": "2601022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2601035",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2601045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2601052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2601064",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2601065",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2601072",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2601085",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2602012",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2602024",
                    "NUMBER": 44
                },
                {
                    "TERYT": "2602025",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2602034",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2602035",
                    "NUMBER": 26
                },
                {
                    "TERYT": "2602042",
                    "NUMBER": 24
                },
                {
                    "TERYT": "2602052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2602064",
                    "NUMBER": 44
                },
                {
                    "TERYT": "2602065",
                    "NUMBER": 62
                },
                {
                    "TERYT": "2602072",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2602082",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2602092",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2603012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2603022",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2603034",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2603035",
                    "NUMBER": 35
                },
                {
                    "TERYT": "2603042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2603054",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2603055",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2604012",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2604024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2604025",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2604034",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2604035",
                    "NUMBER": 35
                },
                {
                    "TERYT": "2604044",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2604045",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2604055",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2604062",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2604074",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2604075",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2604082",
                    "NUMBER": 31
                },
                {
                    "TERYT": "2604092",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2604102",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2604112",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2604124",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2604125",
                    "NUMBER": 63
                },
                {
                    "TERYT": "2604134",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2604135",
                    "NUMBER": 48
                },
                {
                    "TERYT": "2604142",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2604155",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2604162",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2604172",
                    "NUMBER": 36
                },
                {
                    "TERYT": "2604182",
                    "NUMBER": 50
                },
                {
                    "TERYT": "2604192",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2605012",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2605022",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2605034",
                    "NUMBER": 53
                },
                {
                    "TERYT": "2605035",
                    "NUMBER": 49
                },
                {
                    "TERYT": "2605044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2605045",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2605052",
                    "NUMBER": 28
                },
                {
                    "TERYT": "2605062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2605084",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2605085",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2606012",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2606022",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2606032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2606044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2606045",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2606054",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2606055",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2606062",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2606072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2606082",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2607011",
                    "NUMBER": 232
                },
                {
                    "TERYT": "2607022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2607032",
                    "NUMBER": 68
                },
                {
                    "TERYT": "2607044",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2607045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2607054",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2607055",
                    "NUMBER": 30
                },
                {
                    "TERYT": "2607062",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2608014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2608015",
                    "NUMBER": 17
                },
                {
                    "TERYT": "2608032",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2608044",
                    "NUMBER": 28
                },
                {
                    "TERYT": "2608045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2608052",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2609011",
                    "NUMBER": 41
                },
                {
                    "TERYT": "2609022",
                    "NUMBER": 23
                },
                {
                    "TERYT": "2609032",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2609044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2609045",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2609052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2609062",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2609072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2609082",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2609095",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2610011",
                    "NUMBER": 64
                },
                {
                    "TERYT": "2610022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2610032",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2610042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2610054",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2610055",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2611011",
                    "NUMBER": 161
                },
                {
                    "TERYT": "2611022",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2611032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2611042",
                    "NUMBER": 47
                },
                {
                    "TERYT": "2611054",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2611055",
                    "NUMBER": 20
                },
                {
                    "TERYT": "2612012",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2612022",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2612034",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2612044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2612045",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2612054",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2612062",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2612074",
                    "NUMBER": 38
                },
                {
                    "TERYT": "2612075",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2612084",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2612085",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2613012",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2613022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2613042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2613052",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2613064",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2613065",
                    "NUMBER": 39
                },
                {
                    "TERYT": "2661011",
                    "NUMBER": 469
                },
                {
                    "TERYT": "2801011",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2801021",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2801032",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2801045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2801052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2801064",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2802011",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2802022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2802034",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2802042",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2802054",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2802055",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2802062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2802072",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2803011",
                    "NUMBER": 99
                },
                {
                    "TERYT": "2803022",
                    "NUMBER": 38
                },
                {
                    "TERYT": "2803032",
                    "NUMBER": 24
                },
                {
                    "TERYT": "2803044",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2803045",
                    "NUMBER": 48
                },
                {
                    "TERYT": "2803052",
                    "NUMBER": 30
                },
                {
                    "TERYT": "2803062",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2804012",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2804032",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2804042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2804052",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2804064",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2804065",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2804074",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2804075",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2804082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2804094",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2804095",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2805011",
                    "NUMBER": 44
                },
                {
                    "TERYT": "2805022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2805032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2805042",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2805052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2806011",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2806042",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2806062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2806084",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2806085",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2806102",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2807011",
                    "NUMBER": 144
                },
                {
                    "TERYT": "2807021",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2807032",
                    "NUMBER": 92
                },
                {
                    "TERYT": "2807044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2807045",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2807052",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2807064",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2807065",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2807074",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2807075",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2808011",
                    "NUMBER": 48
                },
                {
                    "TERYT": "2808022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2808032",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2808044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2808045",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2808054",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2808062",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2809011",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2809022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2809032",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2809042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2809054",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2810011",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2810024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2810032",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2810042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2810052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2811012",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2811022",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2811032",
                    "NUMBER": 32
                },
                {
                    "TERYT": "2811044",
                    "NUMBER": 51
                },
                {
                    "TERYT": "2811045",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2812011",
                    "NUMBER": 37
                },
                {
                    "TERYT": "2812022",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2812032",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2812042",
                    "NUMBER": 39
                },
                {
                    "TERYT": "2812052",
                    "NUMBER": 25
                },
                {
                    "TERYT": "2813044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2813045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2814014",
                    "NUMBER": 31
                },
                {
                    "TERYT": "2814015",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2814024",
                    "NUMBER": 34
                },
                {
                    "TERYT": "2814025",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2814034",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2814035",
                    "NUMBER": 8
                },
                {
                    "TERYT": "2814042",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2814052",
                    "NUMBER": 10
                },
                {
                    "TERYT": "2814064",
                    "NUMBER": 15
                },
                {
                    "TERYT": "2814065",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2814072",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2814082",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2814094",
                    "NUMBER": 39
                },
                {
                    "TERYT": "2814095",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2814102",
                    "NUMBER": 33
                },
                {
                    "TERYT": "2814112",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2814122",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2815011",
                    "NUMBER": 89
                },
                {
                    "TERYT": "2815022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2815032",
                    "NUMBER": 16
                },
                {
                    "TERYT": "2815042",
                    "NUMBER": 29
                },
                {
                    "TERYT": "2815052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2815064",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2815065",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2815074",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2815075",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2815084",
                    "NUMBER": 30
                },
                {
                    "TERYT": "2815085",
                    "NUMBER": 22
                },
                {
                    "TERYT": "2815092",
                    "NUMBER": 27
                },
                {
                    "TERYT": "2816014",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2816015",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2816024",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2816025",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2816034",
                    "NUMBER": 13
                },
                {
                    "TERYT": "2816035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2816044",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2816045",
                    "NUMBER": 7
                },
                {
                    "TERYT": "2817011",
                    "NUMBER": 59
                },
                {
                    "TERYT": "2817022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2817032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2817044",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2817045",
                    "NUMBER": 12
                },
                {
                    "TERYT": "2817052",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2817062",
                    "NUMBER": 14
                },
                {
                    "TERYT": "2817072",
                    "NUMBER": 18
                },
                {
                    "TERYT": "2817084",
                    "NUMBER": 3
                },
                {
                    "TERYT": "2817085",
                    "NUMBER": 5
                },
                {
                    "TERYT": "2818012",
                    "NUMBER": 9
                },
                {
                    "TERYT": "2818022",
                    "NUMBER": 4
                },
                {
                    "TERYT": "2818034",
                    "NUMBER": 19
                },
                {
                    "TERYT": "2818035",
                    "NUMBER": 21
                },
                {
                    "TERYT": "2819022",
                    "NUMBER": 2
                },
                {
                    "TERYT": "2819034",
                    "NUMBER": 11
                },
                {
                    "TERYT": "2819035",
                    "NUMBER": 6
                },
                {
                    "TERYT": "2861011",
                    "NUMBER": 283
                },
                {
                    "TERYT": "2862011",
                    "NUMBER": 337
                },
                {
                    "TERYT": "3001011",
                    "NUMBER": 40
                },
                {
                    "TERYT": "3001022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3001032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3001044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3001045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3001054",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3001055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3002011",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3002022",
                    "NUMBER": 24
                },
                {
                    "TERYT": "3002032",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3002044",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3002045",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3002074",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3002075",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3002084",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3002085",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3003011",
                    "NUMBER": 209
                },
                {
                    "TERYT": "3003024",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3003025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3003032",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3003042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3003054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3003055",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3003062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3003072",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3003082",
                    "NUMBER": 32
                },
                {
                    "TERYT": "3003094",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3003095",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3003104",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3003105",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3004014",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3004015",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3004024",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3004025",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3004035",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3004042",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3004052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3004065",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3004074",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3004075",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3005012",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3005024",
                    "NUMBER": 30
                },
                {
                    "TERYT": "3005025",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3005032",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3005044",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3005045",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3005055",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3006015",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3006024",
                    "NUMBER": 40
                },
                {
                    "TERYT": "3006025",
                    "NUMBER": 36
                },
                {
                    "TERYT": "3006032",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3006044",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3006045",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3007012",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3007022",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3007032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3007042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3007052",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3007062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3007072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3007085",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3007095",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3007102",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3007112",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3008012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3008034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3008035",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3008052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3008062",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3009011",
                    "NUMBER": 52
                },
                {
                    "TERYT": "3009022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3009032",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3009044",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3009045",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3009052",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3009064",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3009065",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3009072",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3009082",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3009092",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3009102",
                    "NUMBER": 37
                },
                {
                    "TERYT": "3009114",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3010014",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3010015",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3010022",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3010032",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3010044",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3010045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3010052",
                    "NUMBER": 29
                },
                {
                    "TERYT": "3010062",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3010074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3010075",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3010082",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3010092",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3010104",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3010105",
                    "NUMBER": 48
                },
                {
                    "TERYT": "3010112",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3010124",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3010125",
                    "NUMBER": 51
                },
                {
                    "TERYT": "3010132",
                    "NUMBER": 24
                },
                {
                    "TERYT": "3010142",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3011011",
                    "NUMBER": 30
                },
                {
                    "TERYT": "3011024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3011025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3011032",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3011045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3011054",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3011055",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3012011",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3012024",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3012025",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3012034",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3012035",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3012044",
                    "NUMBER": 71
                },
                {
                    "TERYT": "3012045",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3012052",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3012064",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3012065",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3013012",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3013022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3013034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3013035",
                    "NUMBER": 35
                },
                {
                    "TERYT": "3013044",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3013045",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3013052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3013072",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3014012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3014022",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3014034",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3014035",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3014044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3014045",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3015025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3015044",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3015045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3015054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3015064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3015065",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3016014",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3016015",
                    "NUMBER": 40
                },
                {
                    "TERYT": "3016024",
                    "NUMBER": 33
                },
                {
                    "TERYT": "3016025",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3016032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3017011",
                    "NUMBER": 96
                },
                {
                    "TERYT": "3017024",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3017025",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3017034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3017035",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3017042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3017052",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3017065",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3017072",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3017082",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3018012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3018034",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3018035",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3018042",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3018052",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3018064",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3018065",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3018074",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3018075",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3019011",
                    "NUMBER": 175
                },
                {
                    "TERYT": "3019022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3019032",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3019044",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3019045",
                    "NUMBER": 57
                },
                {
                    "TERYT": "3019052",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3019062",
                    "NUMBER": 33
                },
                {
                    "TERYT": "3019074",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3019075",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3019084",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3019085",
                    "NUMBER": 82
                },
                {
                    "TERYT": "3019094",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3019095",
                    "NUMBER": 28
                },
                {
                    "TERYT": "3020014",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3020015",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3020022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3020034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3020035",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3020042",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3020052",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3020064",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3020065",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3021011",
                    "NUMBER": 61
                },
                {
                    "TERYT": "3021021",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3021034",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3021042",
                    "NUMBER": 40
                },
                {
                    "TERYT": "3021052",
                    "NUMBER": 36
                },
                {
                    "TERYT": "3021062",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3021072",
                    "NUMBER": 34
                },
                {
                    "TERYT": "3021084",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3021085",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3021094",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3021095",
                    "NUMBER": 47
                },
                {
                    "TERYT": "3021104",
                    "NUMBER": 32
                },
                {
                    "TERYT": "3021105",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3021114",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3021115",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3021124",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3021125",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3021132",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3021144",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3021145",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3021152",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3021164",
                    "NUMBER": 33
                },
                {
                    "TERYT": "3021165",
                    "NUMBER": 37
                },
                {
                    "TERYT": "3021172",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3022014",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3022015",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3022024",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3022025",
                    "NUMBER": 30
                },
                {
                    "TERYT": "3022034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3022035",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3022042",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3022054",
                    "NUMBER": 83
                },
                {
                    "TERYT": "3022055",
                    "NUMBER": 48
                },
                {
                    "TERYT": "3023011",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3023022",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3023032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3023042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3023052",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3023062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3023072",
                    "NUMBER": 21
                },
                {
                    "TERYT": "3023084",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3023085",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3024011",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3024022",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3024032",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3024042",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3024055",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3024064",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3024065",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3024074",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3024075",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3024084",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3024085",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3025012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3025022",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3025032",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3025044",
                    "NUMBER": 31
                },
                {
                    "TERYT": "3025045",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3025052",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3026024",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3026025",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3026035",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3026044",
                    "NUMBER": 49
                },
                {
                    "TERYT": "3026045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3027011",
                    "NUMBER": 81
                },
                {
                    "TERYT": "3027022",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3027034",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3027035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3027042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3027052",
                    "NUMBER": 49
                },
                {
                    "TERYT": "3027062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3027074",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3027075",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3027082",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3027092",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3028011",
                    "NUMBER": 46
                },
                {
                    "TERYT": "3028022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3028034",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3028035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3028042",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3028055",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3028062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3028072",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3029012",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3029022",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3029034",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3029035",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3030012",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3030024",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3030025",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3030034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3030035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3030044",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3030045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3030054",
                    "NUMBER": 60
                },
                {
                    "TERYT": "3030055",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3031011",
                    "NUMBER": 71
                },
                {
                    "TERYT": "3031024",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3031034",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3031035",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3031042",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3031054",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3031055",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3031062",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3031072",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3031082",
                    "NUMBER": 64
                },
                {
                    "TERYT": "3061011",
                    "NUMBER": 231
                },
                {
                    "TERYT": "3062011",
                    "NUMBER": 150
                },
                {
                    "TERYT": "3063011",
                    "NUMBER": 121
                },
                {
                    "TERYT": "3064029",
                    "NUMBER": 124
                },
                {
                    "TERYT": "3064039",
                    "NUMBER": 105
                },
                {
                    "TERYT": "3064049",
                    "NUMBER": 172
                },
                {
                    "TERYT": "3064059",
                    "NUMBER": 166
                },
                {
                    "TERYT": "3064069",
                    "NUMBER": 86
                },
                {
                    "TERYT": "3201011",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3201022",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3201034",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3201035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3201044",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3201045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3202012",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3202024",
                    "NUMBER": 34
                },
                {
                    "TERYT": "3202025",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3202035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3202042",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3202054",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3202055",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3203014",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3203015",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3203024",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3203025",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3203034",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3203035",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3203052",
                    "NUMBER": 11
                },
                {
                    "TERYT": "3203064",
                    "NUMBER": 16
                },
                {
                    "TERYT": "3203065",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3204024",
                    "NUMBER": 42
                },
                {
                    "TERYT": "3204025",
                    "NUMBER": 51
                },
                {
                    "TERYT": "3204034",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3204035",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3204044",
                    "NUMBER": 29
                },
                {
                    "TERYT": "3204045",
                    "NUMBER": 9
                },
                {
                    "TERYT": "3204052",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3204062",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3204074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3204075",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3205012",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3205024",
                    "NUMBER": 33
                },
                {
                    "TERYT": "3205025",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3205032",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3205044",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3205045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3205072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3205084",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3205085",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3206012",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3206024",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3206025",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3206034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3206035",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3206044",
                    "NUMBER": 29
                },
                {
                    "TERYT": "3206045",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3206054",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3206055",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3206064",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3206072",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3206084",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3206085",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3206092",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3207014",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3207024",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3207034",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3207035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3207044",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3207045",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3207052",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3207064",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3207065",
                    "NUMBER": 25
                },
                {
                    "TERYT": "3208011",
                    "NUMBER": 83
                },
                {
                    "TERYT": "3208022",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3208034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3208035",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3208042",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3208052",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3208062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3209012",
                    "NUMBER": 26
                },
                {
                    "TERYT": "3209022",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3209034",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3209035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3209042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3209055",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3209065",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3209074",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3209075",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3209082",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3210014",
                    "NUMBER": 15
                },
                {
                    "TERYT": "3210015",
                    "NUMBER": 14
                },
                {
                    "TERYT": "3210034",
                    "NUMBER": 39
                },
                {
                    "TERYT": "3210035",
                    "NUMBER": 7
                },
                {
                    "TERYT": "3210044",
                    "NUMBER": 37
                },
                {
                    "TERYT": "3210045",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3211012",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3211022",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3211044",
                    "NUMBER": 51
                },
                {
                    "TERYT": "3211045",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3212012",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3212034",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3212035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3212042",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3212054",
                    "NUMBER": 47
                },
                {
                    "TERYT": "3212055",
                    "NUMBER": 20
                },
                {
                    "TERYT": "3212062",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3213011",
                    "NUMBER": 50
                },
                {
                    "TERYT": "3213021",
                    "NUMBER": 24
                },
                {
                    "TERYT": "3213032",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3213042",
                    "NUMBER": 19
                },
                {
                    "TERYT": "3213052",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3213062",
                    "NUMBER": 22
                },
                {
                    "TERYT": "3214011",
                    "NUMBER": 113
                },
                {
                    "TERYT": "3214024",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3214025",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3214034",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3214035",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3214042",
                    "NUMBER": 28
                },
                {
                    "TERYT": "3214054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3214062",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3214082",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3214092",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3214102",
                    "NUMBER": 17
                },
                {
                    "TERYT": "3215011",
                    "NUMBER": 65
                },
                {
                    "TERYT": "3215024",
                    "NUMBER": 3
                },
                {
                    "TERYT": "3215025",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3215034",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3215035",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3215044",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3215045",
                    "NUMBER": 13
                },
                {
                    "TERYT": "3215062",
                    "NUMBER": 27
                },
                {
                    "TERYT": "3216011",
                    "NUMBER": 23
                },
                {
                    "TERYT": "3216034",
                    "NUMBER": 18
                },
                {
                    "TERYT": "3216035",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3216042",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3216052",
                    "NUMBER": 28
                },
                {
                    "TERYT": "3216062",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3217011",
                    "NUMBER": 47
                },
                {
                    "TERYT": "3217024",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3217025",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3217034",
                    "NUMBER": 12
                },
                {
                    "TERYT": "3217045",
                    "NUMBER": 8
                },
                {
                    "TERYT": "3217052",
                    "NUMBER": 40
                },
                {
                    "TERYT": "3218024",
                    "NUMBER": 10
                },
                {
                    "TERYT": "3218025",
                    "NUMBER": 5
                },
                {
                    "TERYT": "3218032",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3218044",
                    "NUMBER": 4
                },
                {
                    "TERYT": "3218045",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3218054",
                    "NUMBER": 2
                },
                {
                    "TERYT": "3218055",
                    "NUMBER": 6
                },
                {
                    "TERYT": "3261011",
                    "NUMBER": 227
                },
                {
                    "TERYT": "3262011",
                    "NUMBER": 597
                },
                {
                    "TERYT": "3263011",
                    "NUMBER": 54
                }
            ])
            done()
        }).catch(err=>done(err))
    })

    it('ERROR, Wrong GET request', function (done){
        request(server).get("/api/provinces/LESZEK1")
        .auth('Authorization', 'Bearer ' + tokenKey)
        .then(res=>{
            expect(res.body).to.eql([])
            done()
        }).catch(err=>done(err))
    })
})