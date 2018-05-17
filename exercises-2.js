function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    var ob = {};
        for(var i = 0; i < arrPenumpang.length; i++){
            ob = {};
            ob.penumpang = arrPenumpang[i][0];
            ob.naikDari = arrPenumpang[i][1];
            ob.tujuan = arrPenumpang[i][2];
            ob.bayar = 0 ;
                for(var j = 0; j < rute.length; j++){
                    for(var n = 0; n < rute.length; n++){
                        if(rute[j] === arrPenumpang[i][1]){
                            // console.log('naik dari ==>' +arrPenumpang[i][1]);   
                            var naikDari = j; 
                        }
                        else if(rute[n] === arrPenumpang[i][2]){
                            // console.log('tujuan ==>' + arrPenumpang[i][2]);
                            var tujuan = n;
                            
                        }
                    }
                    
                }
                
                
                ob.bayar = (tujuan - naikDari) * 2000;
                // console.log('index A' + naikDari);
                // console.log('indek B' + tujuan);
                result.push(ob);   
        }
        return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
//   [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]