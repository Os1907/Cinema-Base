import React from 'react'
import Trending from '../trending/page'
import Popular from '../popular/page'
import TopRate from '../toprate/page'
import { Link } from 'next-view-transitions'
export default async function HomeComponents() {
  const value = {
      id: 1
  };

  return (
    <>
      <header className='lg:min-h-[80vh] relative bg-main   w-full overflow-hidden '>
        <div className='lg:mx-28 mx-4 relative z-50 flex justify-center items-center  flex-col lg:h-[90vh] h-[50vh] cover'>
          <h1 className=' bg-gradient-to-r from-green to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green hover:bg-clip-text hover:text-transparent cursor-pointer lg:text-9xl text-5xl md:text-7xl font-extrabold transition-all '> <span className=''>Cinema</span>  Base</h1>

          <p className='shadow-green shadow-2xl text-white lg:font-semibold lg:text-base  text-[12px] font-medium'>
            All information about your movie night
          </p>
          <button className=' shadow-green shadow-2xl bg-green text-[12px] py-2 px-3 lg:text-sm lg:py-2 lg:px-3 text-main font-semibold mt-3 rounded-3xl hover:px-6 transition-all   hover:bg-gradient-to-r hover:from-green hover:to-yellow-200 '> 
          <Link href='/explore/1' className="rounded-3xl hover:bg-transparent transition-all hover:border-0">Find Now </Link>
          </button>
     
     </div>

       <div>
         <svg width="100%" viewBox="0 0 1440 869" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute my- Ainme h-[50vh] lg:h-screen rotate-[15deg]   top-0  w-full " data-v-835f5c7a><g clipPath="url(#clip0_184_92145)" data-v-835f5c7a><path d="M1446 275.643L1436.02 274.982C1432.72 274.763 1429.41 275.328 1426.37 276.631L1422.65 278.224C1418.96 279.802 1414.9 280.292 1410.94 279.634L1407.1 278.996C1405.71 278.765 1404.34 278.393 1403.02 277.886L1386.31 271.473C1381.73 269.712 1376.57 270.248 1372.45 272.914L1365.76 277.234C1363.58 278.647 1360.7 278.343 1358.86 276.502V276.502C1356.72 274.374 1353.28 274.343 1351.11 276.433L1344.92 282.403C1340.44 286.717 1333.69 287.644 1328.21 284.694L1326 283.5C1320.44 280.508 1313.71 280.689 1308.33 283.976L1299.03 289.654L1285.59 296.014C1281.96 297.731 1278.9 300.451 1276.77 303.853L1272.93 309.987C1271.03 313.024 1268.38 315.524 1265.24 317.249L1253.92 323.468C1251.36 324.876 1249.11 326.805 1247.34 329.131L1235.04 345.236C1234.37 346.125 1233.62 346.958 1232.81 347.728L1215.19 364.444C1214.42 365.176 1213.59 365.84 1212.7 366.429L1203.62 372.477C1201 374.22 1197.49 373.737 1195.44 371.351V371.351C1193.96 369.62 1191.65 368.841 1189.42 369.318L1184.56 370.36C1181.01 371.12 1177.3 370.529 1174.16 368.701L1173.04 368.049C1169.18 365.802 1164.62 365.075 1160.26 366.01L1159.99 366.067C1155.52 367.024 1150.86 366.28 1146.91 363.98V363.98C1143.13 361.779 1138.68 361 1134.38 361.782L1133.26 361.987C1131.13 362.373 1128.96 362.429 1126.82 362.154L1112.21 360.275C1104.18 359.242 1096.27 362.923 1091.88 369.734L1084.6 381.033C1082.45 384.375 1078.52 386.117 1074.6 385.466V385.466C1071.16 384.895 1067.67 386.16 1065.41 388.803L1065.01 389.266C1060.89 394.06 1053.42 393.901 1049.52 388.934L1049.08 388.388C1047.21 386.002 1044.23 384.755 1041.21 385.091V385.091C1038.59 385.382 1035.98 384.478 1034.09 382.628L1033.56 382.103C1031.28 379.87 1028.11 378.808 1024.95 379.222L1016.74 380.299C1010.61 381.102 1005.15 384.564 1001.81 389.761L1000.9 391.175C1000.6 391.634 1000.34 392.116 1000.12 392.616V392.616C998.034 397.308 992.905 399.853 987.908 398.673L922.828 383.317C914.914 381.45 906.633 384.319 901.57 390.683L881.281 416.19C879.616 418.283 878.366 420.675 877.599 423.237L875.563 430.035C873.756 436.068 869.336 440.972 863.523 443.394L833.628 455.85C832.326 456.392 831.082 457.064 829.916 457.856L805.463 474.443L778.863 492.653C775.823 494.734 773.384 497.578 771.791 500.899L765.453 514.114C764.421 516.265 763.03 518.224 761.34 519.908L758.903 522.336C755.771 525.457 751.734 527.509 747.367 528.201L743.046 528.885C741.042 529.203 739.144 529.997 737.512 531.202V531.202C731.74 535.463 723.583 534.077 719.544 528.147L717.634 525.344C713.701 519.569 706.461 517.035 699.785 519.097L675.952 526.456C674.393 526.938 672.782 527.236 671.153 527.345L642.47 529.257C640.814 529.368 639.178 529.674 637.595 530.169L612.206 538.115C610.18 538.749 608.069 539.072 605.946 539.073L591.266 539.081C586.947 539.084 582.733 537.755 579.198 535.276L559.251 521.29C555.716 518.81 551.502 517.481 547.183 517.484L539.808 517.488L530.734 517.493C527.487 517.495 524.285 518.249 521.379 519.698L509.732 525.502C507.382 526.673 504.835 527.393 502.22 527.625L491.78 528.551C484.992 529.153 478.596 533.199 472.305 535.82C467.807 537.694 461.469 539.153 452.93 539.158C442.362 539.164 430.624 545.001 421.043 551.514C414.832 555.737 394.283 564.38 386.773 564.384V564.384C385.87 564.385 383.099 564.544 382.239 564.815C348.971 575.322 338.889 556.976 329.255 551.758C326.102 550.05 322.456 551.498 319.469 553.484L297.943 567.793C291.932 571.788 284.289 572.417 277.706 569.457L266.573 564.451L242.539 554.686C236.104 552.071 228.793 552.807 223.009 556.652L184.235 582.425C182.617 583.501 180.859 584.346 179.009 584.938L130.261 600.533C128.197 601.194 126.042 601.531 123.874 601.532L100.333 601.545C91.5959 601.55 83.769 596.145 80.6786 587.973L76.9595 578.138C73.8692 569.967 66.5498 566.889 58.67 570.662C46.6763 576.405 29.4795 584.13 19.9733 584.135C4.84173 584.144 -41.9003 571.137 -63.3798 564.633" stroke="url(#paint0_linear_184_92145)" strokeWidth={2} className="svg-elem-1" data-v-835f5c7a /><path d="M1464.92 266.565L1450.57 258.267C1447.82 256.676 1444.74 255.731 1441.57 255.502L1436.18 255.114C1433 254.885 1429.8 255.384 1426.84 256.574L1422.15 258.457C1418.84 259.79 1415.23 260.254 1411.69 259.805L1407.6 259.288C1405.82 259.063 1404.08 258.613 1402.42 257.948L1385.77 251.281C1381.25 249.468 1376.13 249.961 1372.03 252.602L1365.37 256.895C1363.2 258.296 1360.33 257.964 1358.54 256.102V256.102C1356.45 253.933 1352.99 253.888 1350.85 256L1344.61 262.135C1340.07 266.609 1333.08 267.464 1327.59 264.218L1325.87 263.202C1320.56 260.065 1313.95 260.115 1308.69 263.332L1299.08 269.214L1284.88 276.221C1281.48 277.899 1278.6 280.467 1276.54 283.651L1272.28 290.24C1270.48 293.024 1268.05 295.343 1265.18 297.006L1253.35 303.868C1251.14 305.147 1249.19 306.818 1247.58 308.797L1233.46 326.192L1215.42 344.393C1214.55 345.279 1213.58 346.074 1212.55 346.768L1203.86 352.58C1201.21 354.352 1197.67 353.932 1195.51 351.588V351.588C1194.04 349.997 1191.88 349.245 1189.74 349.584L1184.41 350.428C1180.68 351.018 1176.87 350.318 1173.6 348.444L1173.02 348.115C1169.38 346.028 1165.13 345.248 1160.98 345.905L1159.15 346.195C1154.81 346.882 1150.37 346.14 1146.5 344.083V344.083C1142.62 342.025 1138.18 341.283 1133.84 341.97L1133.07 342.092C1131.11 342.402 1129.12 342.434 1127.15 342.185L1112.1 340.284C1104.04 339.267 1096.13 342.983 1091.76 349.828L1084.59 361.072C1082.36 364.575 1078.29 366.458 1074.17 365.894L1073.85 365.85C1070.48 365.389 1067.11 366.665 1064.89 369.24V369.24C1060.85 373.921 1053.58 373.876 1049.6 369.147L1048.46 367.792C1046.58 365.566 1043.68 364.484 1040.81 364.939V364.939C1038.29 365.338 1035.72 364.557 1033.85 362.82L1033.03 362.054C1030.64 359.833 1027.36 358.834 1024.14 359.345L1015.19 360.762C1009.89 361.602 1005.11 364.442 1001.84 368.698L1000.47 370.478C999.972 371.121 999.555 371.821 999.226 372.562V372.562C997.235 377.05 992.33 379.484 987.552 378.355L922.041 362.871C914.12 360.999 905.832 363.872 900.769 370.244L880.463 395.798C878.8 397.892 877.552 400.284 876.786 402.845L874.743 409.675C872.938 415.71 868.519 420.616 862.705 423.04L832.785 435.515C831.483 436.058 830.238 436.731 829.071 437.523L804.603 454.135L777.983 472.375C774.943 474.457 772.505 477.303 770.913 480.626L764.567 493.874C763.536 496.025 762.147 497.985 760.457 499.67L758.015 502.105C754.882 505.23 750.842 507.285 746.471 507.978L742.149 508.662C740.144 508.98 738.244 509.776 736.61 510.983V510.983C730.836 515.249 722.673 513.861 718.634 507.926L716.717 505.109C712.78 499.325 705.531 496.787 698.846 498.852L675.006 506.218C673.445 506.7 671.833 506.999 670.202 507.108L641.499 509.019C639.842 509.129 638.204 509.436 636.619 509.932L611.215 517.886C609.187 518.521 607.074 518.845 604.948 518.846L590.257 518.851C585.937 518.853 581.72 517.522 578.184 515.039L558.214 501.021C554.678 498.539 550.462 497.208 546.141 497.209L538.759 497.212L529.68 497.216C526.43 497.217 523.224 497.973 520.316 499.423L508.663 505.235C506.312 506.408 503.762 507.129 501.145 507.361L490.698 508.287C483.905 508.889 477.506 512.939 471.212 515.564C466.71 517.441 460.368 518.902 451.82 518.905C441.243 518.91 429.495 524.758 419.907 531.282C413.69 535.513 393.144 544.162 385.625 544.165V544.165C384.72 544.165 381.942 544.324 381.08 544.597C347.792 555.114 337.699 536.736 328.058 531.508C324.902 529.796 321.253 531.246 318.264 533.235L296.726 547.564C290.711 551.566 283.061 552.194 276.473 549.228L265.331 544.212L241.278 534.426C234.839 531.806 227.521 532.543 221.733 536.394L182.935 562.205C181.317 563.281 179.557 564.128 177.706 564.721L128.926 580.335C126.859 580.996 124.703 581.333 122.532 581.334L98.9645 581.343C90.2275 581.347 82.4012 575.94 79.3124 567.767L75.5718 557.87C72.4831 549.697 65.1651 546.62 57.2861 550.396C45.2841 556.147 28.069 563.887 18.5533 563.891" stroke="url(#paint1_linear_184_92145)" strokeOpacity="0.5" strokeWidth={2} className="svg-elem-2" data-v-835f5c7a /><path d="M1467.92 245.565L1453.57 237.268C1450.82 235.676 1447.74 234.73 1444.57 234.501L1439.19 234.113C1436 233.884 1432.81 234.383 1429.85 235.573L1425.16 237.455C1421.85 238.788 1418.25 239.251 1414.7 238.803L1410.61 238.285C1408.84 238.061 1407.1 237.611 1405.44 236.946L1388.79 230.277C1384.27 228.465 1379.15 228.957 1375.05 231.599L1368.39 235.891C1366.22 237.292 1363.36 236.96 1361.57 235.098V235.098C1359.48 232.929 1356.02 232.884 1353.87 234.996L1347.64 241.13C1343.1 245.604 1336.11 246.459 1330.62 243.213L1328.9 242.197C1323.6 239.059 1316.99 239.109 1311.73 242.326L1302.12 248.207L1287.93 255.212C1284.53 256.891 1281.65 259.459 1279.59 262.644L1275.33 269.231C1273.54 272.016 1271.1 274.335 1268.23 275.998L1256.41 282.858C1254.2 284.138 1252.25 285.809 1250.64 287.789L1236.52 305.182L1218.49 323.383C1217.61 324.268 1216.65 325.064 1215.61 325.757L1206.93 331.568C1204.29 333.341 1200.74 332.92 1198.58 330.577V330.577C1197.12 328.986 1194.95 328.234 1192.81 328.572L1187.48 329.416C1183.76 330.006 1179.95 329.306 1176.67 327.432L1176.1 327.103C1172.45 325.016 1168.21 324.236 1164.06 324.893L1162.23 325.182C1157.9 325.869 1153.46 325.127 1149.58 323.069V323.069C1145.7 321.011 1141.26 320.27 1136.93 320.956L1136.16 321.078C1134.2 321.388 1132.21 321.419 1130.24 321.171L1115.2 319.27C1107.14 318.253 1099.22 321.97 1094.86 328.816L1087.69 340.057C1085.46 343.559 1081.39 345.441 1077.28 344.878L1076.96 344.834C1073.59 344.373 1070.21 345.648 1067.99 348.223V348.223C1063.95 352.903 1056.69 352.859 1052.71 348.13L1051.57 346.774C1049.69 344.549 1046.79 343.466 1043.92 343.921V343.921C1041.4 344.32 1038.84 343.539 1036.97 341.802L1036.14 341.036C1033.76 338.815 1030.48 337.816 1027.26 338.326L1018.32 339.742C1013.01 340.583 1008.23 343.423 1004.96 347.681L1003.59 349.459C1003.09 350.102 1002.68 350.801 1002.35 351.543V351.543C1000.36 356.03 995.454 358.464 990.676 357.334L925.189 341.85C917.267 339.977 908.976 342.85 903.913 349.224L883.617 374.774C881.954 376.867 880.706 379.259 879.941 381.821L877.899 388.649C876.095 394.685 871.676 399.592 865.862 402.016L835.953 414.488C834.651 415.031 833.406 415.704 832.238 416.497L807.778 433.108L781.167 451.345C778.127 453.428 775.69 456.274 774.098 459.597L767.754 472.844C766.724 474.995 765.334 476.956 763.645 478.641L761.206 481.074C758.073 484.199 754.032 486.255 749.66 486.948L745.343 487.631C743.338 487.949 741.438 488.745 739.805 489.952V489.952C734.033 494.218 725.872 492.83 721.835 486.896L719.916 484.077C715.981 478.294 708.732 475.755 702.049 477.821L678.218 485.184C676.656 485.667 675.043 485.966 673.413 486.074L644.719 487.984C643.062 488.094 641.424 488.401 639.838 488.897L614.444 496.85C612.415 497.485 610.301 497.809 608.175 497.809L593.493 497.815C589.171 497.816 584.954 496.484 581.418 494.001L561.456 479.984C557.919 477.501 553.702 476.169 549.381 476.171L542.004 476.173L532.93 476.177C529.679 476.178 526.472 476.934 523.563 478.385L511.917 484.194C509.566 485.367 507.015 486.088 504.397 486.32L493.96 487.246C487.166 487.848 480.766 491.899 474.471 494.524C469.971 496.4 463.631 497.86 455.088 497.863C444.513 497.867 432.767 503.715 423.181 510.24C416.966 514.47 396.43 523.117 388.912 523.12V523.12C388.007 523.12 385.228 523.279 384.366 523.552C351.09 534.066 340.998 515.692 331.36 510.461C328.204 508.748 324.554 510.199 321.564 512.188L300.039 526.512C294.023 530.515 286.371 531.144 279.782 528.177L268.647 523.162L244.605 513.377C238.165 510.756 230.844 511.493 225.055 515.345L186.274 541.15C184.656 542.227 182.895 543.075 181.043 543.667L132.28 559.278C130.213 559.94 128.055 560.277 125.885 560.278L102.328 560.286C93.5913 560.289 85.7651 554.883 82.6767 546.709L78.9369 536.812C75.8485 528.639 68.5309 525.562 60.652 529.339C48.6535 535.09 31.4455 542.827 21.933 542.831C6.79419 542.836 -39.973 529.798 -61.4641 523.278" stroke="url(#paint2_linear_184_92145)" strokeOpacity="0.25" strokeWidth={2} className="svg-elem-3" data-v-835f5c7a /><path d="M1464.92 224.565L1450.57 216.268C1447.82 214.676 1444.74 213.73 1441.57 213.501L1436.19 213.113C1433 212.884 1429.81 213.383 1426.85 214.573L1422.16 216.455C1418.85 217.788 1415.25 218.251 1411.7 217.803L1407.61 217.285C1405.84 217.061 1404.1 216.611 1402.44 215.946L1385.79 209.277C1381.27 207.465 1376.15 207.957 1372.05 210.599L1365.39 214.891C1363.22 216.292 1360.36 215.96 1358.57 214.098V214.098C1356.48 211.929 1353.02 211.884 1350.87 213.996L1344.64 220.13C1340.1 224.604 1333.11 225.459 1327.62 222.213L1325.9 221.197C1320.6 218.059 1313.99 218.109 1308.73 221.326L1299.12 227.207L1284.93 234.212C1281.53 235.891 1278.65 238.459 1276.59 241.644L1272.33 248.231C1270.54 251.016 1268.1 253.335 1265.23 254.998L1253.41 261.858C1251.2 263.138 1249.25 264.809 1247.64 266.789L1233.52 284.182L1215.49 302.383C1214.61 303.268 1213.65 304.064 1212.61 304.757L1203.93 310.568C1201.29 312.341 1197.74 311.92 1195.58 309.577V309.577C1194.12 307.986 1191.95 307.234 1189.81 307.572L1184.48 308.416C1180.76 309.006 1176.95 308.306 1173.67 306.432L1173.1 306.103C1169.45 304.016 1165.21 303.236 1161.06 303.893L1159.23 304.182C1154.9 304.869 1150.46 304.127 1146.58 302.069V302.069C1142.7 300.011 1138.26 299.27 1133.93 299.956L1133.16 300.078C1131.2 300.388 1129.21 300.419 1127.24 300.171L1112.2 298.27C1104.14 297.253 1096.22 300.97 1091.86 307.816L1084.69 319.057C1082.46 322.559 1078.39 324.441 1074.28 323.878L1073.96 323.834C1070.59 323.373 1067.21 324.648 1064.99 327.223V327.223C1060.95 331.903 1053.69 331.859 1049.71 327.13L1048.57 325.774C1046.69 323.549 1043.79 322.466 1040.92 322.921V322.921C1038.4 323.32 1035.84 322.539 1033.97 320.802L1033.14 320.036C1030.76 317.815 1027.48 316.816 1024.26 317.326L1015.32 318.742C1010.01 319.583 1005.23 322.423 1001.96 326.681L1000.59 328.459C1000.09 329.102 999.678 329.801 999.349 330.543V330.543C997.359 335.03 992.454 337.464 987.676 336.334L922.189 320.85C914.267 318.977 905.976 321.85 900.913 328.224L880.617 353.774C878.954 355.867 877.706 358.259 876.941 360.821L874.899 367.649C873.095 373.685 868.676 378.592 862.862 381.016L832.953 393.488C831.651 394.031 830.406 394.704 829.238 395.497L804.778 412.108L778.167 430.345C775.127 432.428 772.69 435.274 771.098 438.597L764.754 451.844C763.724 453.995 762.334 455.956 760.645 457.641L758.206 460.074C755.073 463.199 751.032 465.255 746.66 465.948L742.343 466.631C740.338 466.949 738.438 467.745 736.805 468.952V468.952C731.033 473.218 722.872 471.83 718.835 465.896L716.916 463.077C712.981 457.294 705.732 454.755 699.049 456.821L675.218 464.184C673.656 464.667 672.043 464.966 670.413 465.074L641.719 466.984C640.062 467.094 638.424 467.401 636.838 467.897L611.444 475.85C609.415 476.485 607.301 476.809 605.175 476.809L590.493 476.815C586.171 476.816 581.954 475.484 578.418 473.001L558.456 458.984C554.919 456.501 550.702 455.169 546.381 455.171L539.004 455.173L529.93 455.177C526.679 455.178 523.472 455.934 520.563 457.385L508.917 463.194C506.566 464.367 504.015 465.088 501.397 465.32L490.96 466.246C484.166 466.848 477.766 470.899 471.471 473.524C466.971 475.4 460.631 476.86 452.088 476.863C441.513 476.867 429.767 482.715 420.181 489.24C413.966 493.47 393.43 502.117 385.912 502.12V502.12C385.007 502.12 382.228 502.279 381.366 502.552C348.09 513.066 337.998 494.692 328.36 489.461C325.204 487.748 321.554 489.199 318.564 491.188L297.039 505.512C291.023 509.515 283.371 510.144 276.782 507.177L265.647 502.162L241.605 492.377C235.165 489.756 227.844 490.493 222.055 494.345L183.274 520.15C181.656 521.227 179.895 522.075 178.043 522.667L129.28 538.278C127.213 538.94 125.055 539.277 122.885 539.278L99.3284 539.286C90.5913 539.289 82.7651 533.883 79.6767 525.709L75.9369 515.812C72.8485 507.639 65.5309 504.562 57.652 508.339C45.6535 514.09 28.4455 521.827 18.933 521.831C3.79419 521.836 -42.973 508.798 -64.4641 502.278" stroke="url(#paint3_linear_184_92145)" strokeOpacity="0.1" strokeWidth={2} className="svg-elem-4" data-v-835f5c7a /></g><defs data-v-835f5c7a><linearGradient id="paint0_linear_184_92145" x1="1419.37" y1="282.77" x2="3.81323" y2="550.717" gradientUnits="userSpaceOnUse" data-v-835f5c7a><stop stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.203125" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.333238" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.66715" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.757084" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.994792" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /></linearGradient><linearGradient id="paint1_linear_184_92145" x1="1433.93" y1="259.854" x2="-4.14577" y2="537.487" gradientUnits="userSpaceOnUse" data-v-835f5c7a><stop stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.203125" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.333238" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.66715" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.757084" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.994792" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /></linearGradient><linearGradient id="paint2_linear_184_92145" x1="1438.07" y1="238.674" x2="6.64425" y2="510.046" gradientUnits="userSpaceOnUse" data-v-835f5c7a><stop stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.203125" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.333238" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.66715" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.757084" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.994792" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /></linearGradient><linearGradient id="paint3_linear_184_92145" x1="1435.07" y1="217.674" x2="3.64425" y2="489.046" gradientUnits="userSpaceOnUse" data-v-835f5c7a><stop stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.203125" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.333238" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.66715" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /><stop offset="0.757084" stopColor="#00DC82" data-v-835f5c7a /><stop offset="0.994792" stopColor="#00DC82" stopOpacity={0} data-v-835f5c7a /></linearGradient><clipPath id="clip0_184_92145" data-v-835f5c7a><rect width={1491} height={732} fill="white" transform="translate(-73 144) rotate(-8)" className="svg-elem-5" data-v-835f5c7a /></clipPath></defs></svg>
       </div>
        <div className='absolute top-0 bg-main  z-[2]  h-screen w-full my-Ainme '></div>
      </header>
      <Trending/>
      <Popular params={value}/>
      <TopRate params={value}/>
     

    </>
  )
}
