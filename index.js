function calcular(tipo, valor){
    console.log(tipo)
       if(tipo === 'acao'){
         if(valor === 'c'){
           document.getElementById('resul').value = '';
         }

         if(valor === '+' || valor === '-' || valor ==='*' || valor === '/' || valor === '.'){
           document.getElementById('resul').value += valor
         }

         if(valor === '='){
           let resul = eval(document.getElementById('resul').value)
           document.getElementById('resul').value = resul
         }

       } else if(tipo === 'valor'){{
         document.getElementById('resul').value += valor;
       }

       }
   }