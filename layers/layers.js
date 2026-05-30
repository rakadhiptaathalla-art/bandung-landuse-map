ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([778168.034403, 9228093.961180, 811705.927693, 9243901.791728]);
var wms_layers = [];

var lyr_TutupanLahan_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tutupan Lahan<br />\
    <img src="styles/legend/TutupanLahan_0_0.png" /> 0<br />\
    <img src="styles/legend/TutupanLahan_0_1.png" /> 1<br />\
    <img src="styles/legend/TutupanLahan_0_2.png" /> 2<br />\
    <img src="styles/legend/TutupanLahan_0_3.png" /> 3<br />\
    <img src="styles/legend/TutupanLahan_0_4.png" /> 4<br />\
    <img src="styles/legend/TutupanLahan_0_5.png" /> 5<br />\
    <img src="styles/legend/TutupanLahan_0_6.png" /> 6<br />\
    <img src="styles/legend/TutupanLahan_0_7.png" /> 7<br />\
    <img src="styles/legend/TutupanLahan_0_8.png" /> 8<br />\
    <img src="styles/legend/TutupanLahan_0_9.png" /> 9<br />\
    <img src="styles/legend/TutupanLahan_0_10.png" /> 10<br />\
    <img src="styles/legend/TutupanLahan_0_11.png" /> 11<br />\
    <img src="styles/legend/TutupanLahan_0_12.png" /> 12<br />\
    <img src="styles/legend/TutupanLahan_0_13.png" /> 13<br />\
    <img src="styles/legend/TutupanLahan_0_14.png" /> 14<br />\
    <img src="styles/legend/TutupanLahan_0_15.png" /> 15<br />\
    <img src="styles/legend/TutupanLahan_0_16.png" /> 16<br />\
    <img src="styles/legend/TutupanLahan_0_17.png" /> 17<br />\
    <img src="styles/legend/TutupanLahan_0_18.png" /> 18<br />\
    <img src="styles/legend/TutupanLahan_0_19.png" /> 19<br />\
    <img src="styles/legend/TutupanLahan_0_20.png" /> 20<br />\
    <img src="styles/legend/TutupanLahan_0_21.png" /> 21<br />\
    <img src="styles/legend/TutupanLahan_0_22.png" /> 22<br />\
    <img src="styles/legend/TutupanLahan_0_23.png" /> 23<br />\
    <img src="styles/legend/TutupanLahan_0_24.png" /> 24<br />\
    <img src="styles/legend/TutupanLahan_0_25.png" /> 25<br />\
    <img src="styles/legend/TutupanLahan_0_26.png" /> 26<br />\
    <img src="styles/legend/TutupanLahan_0_27.png" /> 27<br />\
    <img src="styles/legend/TutupanLahan_0_28.png" /> 28<br />\
    <img src="styles/legend/TutupanLahan_0_29.png" /> 29<br />\
    <img src="styles/legend/TutupanLahan_0_30.png" /> 30<br />\
    <img src="styles/legend/TutupanLahan_0_31.png" /> 31<br />\
    <img src="styles/legend/TutupanLahan_0_32.png" /> 32<br />\
    <img src="styles/legend/TutupanLahan_0_33.png" /> 33<br />\
    <img src="styles/legend/TutupanLahan_0_34.png" /> 34<br />\
    <img src="styles/legend/TutupanLahan_0_35.png" /> 35<br />\
    <img src="styles/legend/TutupanLahan_0_36.png" /> 36<br />\
    <img src="styles/legend/TutupanLahan_0_37.png" /> 37<br />\
    <img src="styles/legend/TutupanLahan_0_38.png" /> 38<br />\
    <img src="styles/legend/TutupanLahan_0_39.png" /> 39<br />\
    <img src="styles/legend/TutupanLahan_0_40.png" /> 40<br />\
    <img src="styles/legend/TutupanLahan_0_41.png" /> 41<br />\
    <img src="styles/legend/TutupanLahan_0_42.png" /> 42<br />\
    <img src="styles/legend/TutupanLahan_0_43.png" /> 43<br />\
    <img src="styles/legend/TutupanLahan_0_44.png" /> 44<br />\
    <img src="styles/legend/TutupanLahan_0_45.png" /> 45<br />\
    <img src="styles/legend/TutupanLahan_0_46.png" /> 46<br />\
    <img src="styles/legend/TutupanLahan_0_47.png" /> 47<br />\
    <img src="styles/legend/TutupanLahan_0_48.png" /> 48<br />\
    <img src="styles/legend/TutupanLahan_0_49.png" /> 49<br />\
    <img src="styles/legend/TutupanLahan_0_50.png" /> 50<br />\
    <img src="styles/legend/TutupanLahan_0_51.png" /> 51<br />\
    <img src="styles/legend/TutupanLahan_0_52.png" /> 52<br />\
    <img src="styles/legend/TutupanLahan_0_53.png" /> 53<br />\
    <img src="styles/legend/TutupanLahan_0_54.png" /> 54<br />\
    <img src="styles/legend/TutupanLahan_0_55.png" /> 55<br />\
    <img src="styles/legend/TutupanLahan_0_56.png" /> 56<br />\
    <img src="styles/legend/TutupanLahan_0_57.png" /> 57<br />\
    <img src="styles/legend/TutupanLahan_0_58.png" /> 58<br />\
    <img src="styles/legend/TutupanLahan_0_59.png" /> 59<br />\
    <img src="styles/legend/TutupanLahan_0_60.png" /> 60<br />\
    <img src="styles/legend/TutupanLahan_0_61.png" /> 61<br />\
    <img src="styles/legend/TutupanLahan_0_62.png" /> 62<br />\
    <img src="styles/legend/TutupanLahan_0_63.png" /> 63<br />\
    <img src="styles/legend/TutupanLahan_0_64.png" /> 64<br />\
    <img src="styles/legend/TutupanLahan_0_65.png" /> 65<br />\
    <img src="styles/legend/TutupanLahan_0_66.png" /> 66<br />\
    <img src="styles/legend/TutupanLahan_0_67.png" /> 67<br />\
    <img src="styles/legend/TutupanLahan_0_68.png" /> 68<br />\
    <img src="styles/legend/TutupanLahan_0_69.png" /> 69<br />\
    <img src="styles/legend/TutupanLahan_0_70.png" /> 70<br />\
    <img src="styles/legend/TutupanLahan_0_71.png" /> 71<br />\
    <img src="styles/legend/TutupanLahan_0_72.png" /> 72<br />\
    <img src="styles/legend/TutupanLahan_0_73.png" /> 73<br />\
    <img src="styles/legend/TutupanLahan_0_74.png" /> 74<br />\
    <img src="styles/legend/TutupanLahan_0_75.png" /> 75<br />\
    <img src="styles/legend/TutupanLahan_0_76.png" /> 76<br />\
    <img src="styles/legend/TutupanLahan_0_77.png" /> 77<br />\
    <img src="styles/legend/TutupanLahan_0_78.png" /> 78<br />\
    <img src="styles/legend/TutupanLahan_0_79.png" /> 79<br />\
    <img src="styles/legend/TutupanLahan_0_80.png" /> 80<br />\
    <img src="styles/legend/TutupanLahan_0_81.png" /> 81<br />\
    <img src="styles/legend/TutupanLahan_0_82.png" /> 82<br />\
    <img src="styles/legend/TutupanLahan_0_83.png" /> 83<br />\
    <img src="styles/legend/TutupanLahan_0_84.png" /> 84<br />\
    <img src="styles/legend/TutupanLahan_0_85.png" /> 85<br />\
    <img src="styles/legend/TutupanLahan_0_86.png" /> 86<br />\
    <img src="styles/legend/TutupanLahan_0_87.png" /> 87<br />\
    <img src="styles/legend/TutupanLahan_0_88.png" /> 88<br />\
    <img src="styles/legend/TutupanLahan_0_89.png" /> 89<br />\
    <img src="styles/legend/TutupanLahan_0_90.png" /> 90<br />\
    <img src="styles/legend/TutupanLahan_0_91.png" /> 91<br />\
    <img src="styles/legend/TutupanLahan_0_92.png" /> 92<br />\
    <img src="styles/legend/TutupanLahan_0_93.png" /> 93<br />\
    <img src="styles/legend/TutupanLahan_0_94.png" /> 94<br />\
    <img src="styles/legend/TutupanLahan_0_95.png" /> 95<br />\
    <img src="styles/legend/TutupanLahan_0_96.png" /> 96<br />\
    <img src="styles/legend/TutupanLahan_0_97.png" /> 97<br />\
    <img src="styles/legend/TutupanLahan_0_98.png" /> 98<br />\
    <img src="styles/legend/TutupanLahan_0_99.png" /> 99<br />\
    <img src="styles/legend/TutupanLahan_0_100.png" /> 100<br />\
    <img src="styles/legend/TutupanLahan_0_101.png" /> 101<br />\
    <img src="styles/legend/TutupanLahan_0_102.png" /> 102<br />\
    <img src="styles/legend/TutupanLahan_0_103.png" /> 103<br />\
    <img src="styles/legend/TutupanLahan_0_104.png" /> 104<br />\
    <img src="styles/legend/TutupanLahan_0_105.png" /> 105<br />\
    <img src="styles/legend/TutupanLahan_0_106.png" /> 106<br />\
    <img src="styles/legend/TutupanLahan_0_107.png" /> 107<br />\
    <img src="styles/legend/TutupanLahan_0_108.png" /> 108<br />\
    <img src="styles/legend/TutupanLahan_0_109.png" /> 109<br />\
    <img src="styles/legend/TutupanLahan_0_110.png" /> 110<br />\
    <img src="styles/legend/TutupanLahan_0_111.png" /> 111<br />\
    <img src="styles/legend/TutupanLahan_0_112.png" /> 112<br />\
    <img src="styles/legend/TutupanLahan_0_113.png" /> 113<br />\
    <img src="styles/legend/TutupanLahan_0_114.png" /> 114<br />\
    <img src="styles/legend/TutupanLahan_0_115.png" /> 115<br />\
    <img src="styles/legend/TutupanLahan_0_116.png" /> 116<br />\
    <img src="styles/legend/TutupanLahan_0_117.png" /> 117<br />\
    <img src="styles/legend/TutupanLahan_0_118.png" /> 118<br />\
    <img src="styles/legend/TutupanLahan_0_119.png" /> 119<br />\
    <img src="styles/legend/TutupanLahan_0_120.png" /> 120<br />\
    <img src="styles/legend/TutupanLahan_0_121.png" /> 121<br />\
    <img src="styles/legend/TutupanLahan_0_122.png" /> 122<br />\
    <img src="styles/legend/TutupanLahan_0_123.png" /> 123<br />\
    <img src="styles/legend/TutupanLahan_0_124.png" /> 124<br />\
    <img src="styles/legend/TutupanLahan_0_125.png" /> 125<br />\
    <img src="styles/legend/TutupanLahan_0_126.png" /> 126<br />\
    <img src="styles/legend/TutupanLahan_0_127.png" /> 127<br />\
    <img src="styles/legend/TutupanLahan_0_128.png" /> 128<br />\
    <img src="styles/legend/TutupanLahan_0_129.png" /> 129<br />\
    <img src="styles/legend/TutupanLahan_0_130.png" /> 130<br />\
    <img src="styles/legend/TutupanLahan_0_131.png" /> 131<br />\
    <img src="styles/legend/TutupanLahan_0_132.png" /> 132<br />\
    <img src="styles/legend/TutupanLahan_0_133.png" /> 133<br />\
    <img src="styles/legend/TutupanLahan_0_134.png" /> 134<br />\
    <img src="styles/legend/TutupanLahan_0_135.png" /> 135<br />\
    <img src="styles/legend/TutupanLahan_0_136.png" /> 136<br />\
    <img src="styles/legend/TutupanLahan_0_137.png" /> 137<br />\
    <img src="styles/legend/TutupanLahan_0_138.png" /> 138<br />\
    <img src="styles/legend/TutupanLahan_0_139.png" /> 139<br />\
    <img src="styles/legend/TutupanLahan_0_140.png" /> 140<br />\
    <img src="styles/legend/TutupanLahan_0_141.png" /> 141<br />\
    <img src="styles/legend/TutupanLahan_0_142.png" /> 142<br />\
    <img src="styles/legend/TutupanLahan_0_143.png" /> 143<br />\
    <img src="styles/legend/TutupanLahan_0_144.png" /> 144<br />\
    <img src="styles/legend/TutupanLahan_0_145.png" /> 145<br />\
    <img src="styles/legend/TutupanLahan_0_146.png" /> 146<br />\
    <img src="styles/legend/TutupanLahan_0_147.png" /> 147<br />\
    <img src="styles/legend/TutupanLahan_0_148.png" /> 148<br />\
    <img src="styles/legend/TutupanLahan_0_149.png" /> 149<br />\
    <img src="styles/legend/TutupanLahan_0_150.png" /> 150<br />\
    <img src="styles/legend/TutupanLahan_0_151.png" /> 151<br />\
    <img src="styles/legend/TutupanLahan_0_152.png" /> 152<br />\
    <img src="styles/legend/TutupanLahan_0_153.png" /> 153<br />\
    <img src="styles/legend/TutupanLahan_0_154.png" /> 154<br />\
    <img src="styles/legend/TutupanLahan_0_155.png" /> 155<br />\
    <img src="styles/legend/TutupanLahan_0_156.png" /> 156<br />\
    <img src="styles/legend/TutupanLahan_0_157.png" /> 157<br />\
    <img src="styles/legend/TutupanLahan_0_158.png" /> 158<br />\
    <img src="styles/legend/TutupanLahan_0_159.png" /> 159<br />\
    <img src="styles/legend/TutupanLahan_0_160.png" /> 160<br />\
    <img src="styles/legend/TutupanLahan_0_161.png" /> 161<br />\
    <img src="styles/legend/TutupanLahan_0_162.png" /> 162<br />\
    <img src="styles/legend/TutupanLahan_0_163.png" /> 163<br />\
    <img src="styles/legend/TutupanLahan_0_164.png" /> 164<br />\
    <img src="styles/legend/TutupanLahan_0_165.png" /> 165<br />\
    <img src="styles/legend/TutupanLahan_0_166.png" /> 166<br />\
    <img src="styles/legend/TutupanLahan_0_167.png" /> 167<br />\
    <img src="styles/legend/TutupanLahan_0_168.png" /> 168<br />\
    <img src="styles/legend/TutupanLahan_0_169.png" /> 169<br />\
    <img src="styles/legend/TutupanLahan_0_170.png" /> 170<br />\
    <img src="styles/legend/TutupanLahan_0_171.png" /> 171<br />\
    <img src="styles/legend/TutupanLahan_0_172.png" /> 172<br />\
    <img src="styles/legend/TutupanLahan_0_173.png" /> 173<br />\
    <img src="styles/legend/TutupanLahan_0_174.png" /> 174<br />\
    <img src="styles/legend/TutupanLahan_0_175.png" /> 175<br />\
    <img src="styles/legend/TutupanLahan_0_176.png" /> 176<br />\
    <img src="styles/legend/TutupanLahan_0_177.png" /> 177<br />\
    <img src="styles/legend/TutupanLahan_0_178.png" /> 178<br />\
    <img src="styles/legend/TutupanLahan_0_179.png" /> 179<br />\
    <img src="styles/legend/TutupanLahan_0_180.png" /> 180<br />\
    <img src="styles/legend/TutupanLahan_0_181.png" /> 181<br />\
    <img src="styles/legend/TutupanLahan_0_182.png" /> 182<br />\
    <img src="styles/legend/TutupanLahan_0_183.png" /> 183<br />\
    <img src="styles/legend/TutupanLahan_0_184.png" /> 184<br />\
    <img src="styles/legend/TutupanLahan_0_185.png" /> 185<br />\
    <img src="styles/legend/TutupanLahan_0_186.png" /> 186<br />\
    <img src="styles/legend/TutupanLahan_0_187.png" /> 187<br />\
    <img src="styles/legend/TutupanLahan_0_188.png" /> 188<br />\
    <img src="styles/legend/TutupanLahan_0_189.png" /> 189<br />\
    <img src="styles/legend/TutupanLahan_0_190.png" /> 190<br />\
    <img src="styles/legend/TutupanLahan_0_191.png" /> 191<br />\
    <img src="styles/legend/TutupanLahan_0_192.png" /> 192<br />\
    <img src="styles/legend/TutupanLahan_0_193.png" /> 193<br />\
    <img src="styles/legend/TutupanLahan_0_194.png" /> 194<br />\
    <img src="styles/legend/TutupanLahan_0_195.png" /> 195<br />\
    <img src="styles/legend/TutupanLahan_0_196.png" /> 196<br />\
    <img src="styles/legend/TutupanLahan_0_197.png" /> 197<br />\
    <img src="styles/legend/TutupanLahan_0_198.png" /> 198<br />\
    <img src="styles/legend/TutupanLahan_0_199.png" /> 199<br />\
    <img src="styles/legend/TutupanLahan_0_200.png" /> 200<br />\
    <img src="styles/legend/TutupanLahan_0_201.png" /> 201<br />\
    <img src="styles/legend/TutupanLahan_0_202.png" /> 202<br />\
    <img src="styles/legend/TutupanLahan_0_203.png" /> 203<br />\
    <img src="styles/legend/TutupanLahan_0_204.png" /> 204<br />\
    <img src="styles/legend/TutupanLahan_0_205.png" /> 205<br />\
    <img src="styles/legend/TutupanLahan_0_206.png" /> 206<br />\
    <img src="styles/legend/TutupanLahan_0_207.png" /> 207<br />\
    <img src="styles/legend/TutupanLahan_0_208.png" /> 208<br />\
    <img src="styles/legend/TutupanLahan_0_209.png" /> 209<br />\
    <img src="styles/legend/TutupanLahan_0_210.png" /> 210<br />\
    <img src="styles/legend/TutupanLahan_0_211.png" /> 211<br />\
    <img src="styles/legend/TutupanLahan_0_212.png" /> 212<br />\
    <img src="styles/legend/TutupanLahan_0_213.png" /> 213<br />\
    <img src="styles/legend/TutupanLahan_0_214.png" /> 214<br />\
    <img src="styles/legend/TutupanLahan_0_215.png" /> 215<br />\
    <img src="styles/legend/TutupanLahan_0_216.png" /> 216<br />\
    <img src="styles/legend/TutupanLahan_0_217.png" /> 217<br />\
    <img src="styles/legend/TutupanLahan_0_218.png" /> 218<br />\
    <img src="styles/legend/TutupanLahan_0_219.png" /> 219<br />\
    <img src="styles/legend/TutupanLahan_0_220.png" /> 220<br />\
    <img src="styles/legend/TutupanLahan_0_221.png" /> 221<br />\
    <img src="styles/legend/TutupanLahan_0_222.png" /> 222<br />\
    <img src="styles/legend/TutupanLahan_0_223.png" /> 223<br />\
    <img src="styles/legend/TutupanLahan_0_224.png" /> 224<br />\
    <img src="styles/legend/TutupanLahan_0_225.png" /> 225<br />\
    <img src="styles/legend/TutupanLahan_0_226.png" /> 226<br />\
    <img src="styles/legend/TutupanLahan_0_227.png" /> 227<br />\
    <img src="styles/legend/TutupanLahan_0_228.png" /> 228<br />\
    <img src="styles/legend/TutupanLahan_0_229.png" /> 229<br />\
    <img src="styles/legend/TutupanLahan_0_230.png" /> 230<br />\
    <img src="styles/legend/TutupanLahan_0_231.png" /> 231<br />\
    <img src="styles/legend/TutupanLahan_0_232.png" /> 232<br />\
    <img src="styles/legend/TutupanLahan_0_233.png" /> 233<br />\
    <img src="styles/legend/TutupanLahan_0_234.png" /> 234<br />\
    <img src="styles/legend/TutupanLahan_0_235.png" /> 235<br />\
    <img src="styles/legend/TutupanLahan_0_236.png" /> 236<br />\
    <img src="styles/legend/TutupanLahan_0_237.png" /> 237<br />\
    <img src="styles/legend/TutupanLahan_0_238.png" /> 238<br />\
    <img src="styles/legend/TutupanLahan_0_239.png" /> 239<br />\
    <img src="styles/legend/TutupanLahan_0_240.png" /> 240<br />\
    <img src="styles/legend/TutupanLahan_0_241.png" /> 241<br />\
    <img src="styles/legend/TutupanLahan_0_242.png" /> 242<br />\
    <img src="styles/legend/TutupanLahan_0_243.png" /> 243<br />\
    <img src="styles/legend/TutupanLahan_0_244.png" /> 244<br />\
    <img src="styles/legend/TutupanLahan_0_245.png" /> 245<br />\
    <img src="styles/legend/TutupanLahan_0_246.png" /> 246<br />\
    <img src="styles/legend/TutupanLahan_0_247.png" /> 247<br />\
    <img src="styles/legend/TutupanLahan_0_248.png" /> 248<br />\
    <img src="styles/legend/TutupanLahan_0_249.png" /> 249<br />\
    <img src="styles/legend/TutupanLahan_0_250.png" /> 250<br />\
    <img src="styles/legend/TutupanLahan_0_251.png" /> 251<br />\
    <img src="styles/legend/TutupanLahan_0_252.png" /> 252<br />\
    <img src="styles/legend/TutupanLahan_0_253.png" /> 253<br />\
    <img src="styles/legend/TutupanLahan_0_254.png" /> 254<br />\
    <img src="styles/legend/TutupanLahan_0_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TutupanLahan_0.png",
            attributions: ' ',
            projection: 'EPSG:32748',
            alwaysInRange: true,
            imageExtent: [781130.000000, 9228740.000000, 802760.000000, 9243510.000000]
        })
    });
var format_AdministrasiKotaBandung_1 = new ol.format.GeoJSON();
var features_AdministrasiKotaBandung_1 = format_AdministrasiKotaBandung_1.readFeatures(json_AdministrasiKotaBandung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_AdministrasiKotaBandung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKotaBandung_1.addFeatures(features_AdministrasiKotaBandung_1);
var lyr_AdministrasiKotaBandung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKotaBandung_1, 
                style: style_AdministrasiKotaBandung_1,
                popuplayertitle: 'Administrasi Kota Bandung',
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKotaBandung_1.png" /> Administrasi Kota Bandung'
            });

lyr_TutupanLahan_0.setVisible(true);lyr_AdministrasiKotaBandung_1.setVisible(true);
var layersList = [lyr_TutupanLahan_0,lyr_AdministrasiKotaBandung_1];
lyr_AdministrasiKotaBandung_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AdministrasiKotaBandung_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AdministrasiKotaBandung_1.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AdministrasiKotaBandung_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});