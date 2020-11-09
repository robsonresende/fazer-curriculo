

function render(){

        if (document.querySelector('#nomeCompleto').value == null){
          alert("Você esqueceu de preencher o nome!");
        } else{
          var nome = document.querySelector('#nomeCompleto').value;
          document.querySelector('#seuNome').innerText = nome;

          if (document.querySelector('#endereco').value != ""){          
            var endereco = document.querySelector('#endereco').value;
            document.querySelector('#end').innerText = endereco;
          } else{
            document.querySelector('#end').innerText = "";
          }

          if (document.querySelector('#celular').value != ""){
            var celular = document.querySelector('#celular').value;
            document.querySelector('#cel').innerText = celular;
          } else{
            document.querySelector('#cel').innerText = "";
          }

          if (document.querySelector('#fixo').value != ""){
            var fixo = document.querySelector('#fixo').value;
            document.querySelector('#fix').innerText = fixo;
          } else{
            document.querySelector('#fix').innerText = "";
          }

          if(document.querySelector('#objetivo').value != ""){
            var objetivo = document.querySelector('#objetivo').value;
            document.querySelector('#parObj').innerText = objetivo;
            document.querySelector('#obj').innerText = 'Objetivo';
          } else{
            document.querySelector('#obj').innerText = "";
            document.querySelector('#parObj').innerText = '';
          }

          if (document.querySelector('#instituicao').value != "" || document.querySelector('#curso').value != "" || document.querySelector('#ano').value != ""){
            document.querySelector('#grad').innerText = 'Graduação';
            var instituicao = document.querySelector('#instituicao').value;
            document.querySelector('#inst').innerText = instituicao + " - ";
            var curso = document.querySelector('#curso').value;
            document.querySelector('#cur').innerText = curso + " - ";
            var ano = document.querySelector('#ano').value;
            document.querySelector('#an').innerText = ano;
          } else{
            document.querySelector('#grad').innerText = '';
            document.querySelector('#inst').innerText = '';
            document.querySelector('#cur').innerText = '';
            document.querySelector('#an').innerText = '';
          }

          if (document.querySelector('#cursos').value != ""){
            document.querySelector('#curCom').innerText = 'Cursos complementares';
            var cursos = document.querySelector('#cursos').value;
            document.querySelector('#parCurCom').innerText = cursos;
          } else{
            document.querySelector('#curCom').innerText = '';
            document.querySelector('#parCurCom').innerText = '';
          }

          if (document.querySelector('#experiencia').value != ""){
            document.querySelector('#exp').innerText = 'Experiência';
            var experiencia = document.querySelector('#experiencia').value;
            document.querySelector('#parExp').innerText = experiencia;
          } else{
            document.querySelector('#exp').innerText = '';
            document.querySelector('#parExp').innerText = '';
          }

          if (document.querySelector('#empresa1').value != "" || document.querySelector('#empresa2').value != "" || 
            document.querySelector('#empresa3').value != ""){
            document.querySelector('#empr').innerText = 'Histórico profissional';
          } else{
            document.querySelector('#empr').innerText = '';
          }

          if (document.querySelector('#empresa1').value != ""){
            var empresa1 = document.querySelector('#empresa1').value;
            document.querySelector('#nomeEmpr1').innerText = '* ' + empresa1;
            var admissao1 = document.querySelector('#admissao1').value;
            document.querySelector('#admisEmpr1').innerText = " - de " + convertData(admissao1);
            var cargo1 = document.querySelector('#cargo1').value;
            document.querySelector('#cargoEmpr1').innerText = 'Cargo: '+ cargo1;
            var checkBox = document.getElementById('emprAtual');
            if ( checkBox.checked == true){
              var desligamento1 = document.querySelector('#emprAtual').value;
              document.querySelector('#deslEmpr1').innerText = " até " + desligamento1;
            } else{
              var desligamento1 = document.querySelector('#desligamento1').value;
              document.querySelector('#deslEmpr1').innerText = " até " + convertData(desligamento1);
            }

          } else{
            document.querySelector('#nomeEmpr1').innerText = '';
            document.querySelector('#admisEmpr1').innerText = '';
            document.querySelector('#cargoEmpr1').innerText = '';
            document.querySelector('#deslEmpr1').innerText = '';
          }

          if (document.querySelector('#empresa2').value != ""){
            var empresa2 = document.querySelector('#empresa2').value;
            document.querySelector('#nomeEmpr2').innerText = '* ' + empresa2;
            var admissao2 = document.querySelector('#admissao2').value;
            document.querySelector('#admisEmpr2').innerText = " - de " + convertData(admissao2);
            var cargo2 = document.querySelector('#cargo2').value;
            document.querySelector('#cargoEmpr2').innerText = 'Cargo: '+ cargo2;
            var desligamento2 = document.querySelector('#desligamento2').value;
            document.querySelector('#deslEmpr2').innerText = " até " + convertData(desligamento2);
          } else{
            document.querySelector('#nomeEmpr2').innerText = '';
            document.querySelector('#admisEmpr2').innerText = '';
            document.querySelector('#cargoEmpr2').innerText = '';
            document.querySelector('#deslEmpr2').innerText = '';
          }

          if (document.querySelector('#empresa3').value != ""){
            var empresa3 = document.querySelector('#empresa3').value;
            document.querySelector('#nomeEmpr3').innerText = '* ' + empresa3;
            var admissao3 = document.querySelector('#admissao3').value;
            document.querySelector('#admisEmpr3').innerText = " - de " + convertData(admissao3);
            var cargo3 = document.querySelector('#cargo3').value;
            document.querySelector('#cargoEmpr3').innerText = 'Cargo: '+ cargo3;
            var desligamento3 = document.querySelector('#desligamento3').value;
            document.querySelector('#deslEmpr3').innerText = " até " + convertData(desligamento3);
          } else{
            document.querySelector('#nomeEmpr3').innerText = '';
            document.querySelector('#admisEmpr3').innerText = '';
            document.querySelector('#cargoEmpr3').innerText = '';
            document.querySelector('#deslEmpr3').innerText = '';
          }

          if (document.querySelector('#adicional').value != ""){
            var adicional = document.querySelector('#adicional').value;
            document.querySelector('#parInfoAdic').innerText = adicional;
            document.querySelector('#infoAdic').innerText = 'Informações adicionais';
          } else{
           document.querySelector('#parInfoAdic').innerText = '';
           document.querySelector('#infoAdic').innerText = ''; 
          }

        }// end if else

        
      }//end function

render();

function convertData(dataInput){
  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  return(dataFormatada);
}

convertData();


function genPDF(){

        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF();

        doc.fromHTML($('#resume').get(0), 20,20,{
          'width':500 });

        doc.save('resume.pdf');
}

genPDF();
