
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/cliente)
        .state('form.cliente', {
            url: '/cliente',
            templateUrl: 'form-cliente.html'
        })
        
        // url will be /form/evento
        .state('form.evento', {
            url: '/evento',
            templateUrl: 'form-evento.html'
        })

        // url will be /form/cardapiio
        .state('form.cardapio',{
            url: '/cardapio,',
            templateUrl: 'form-cardapio.html'
        })
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        })
        .state('form.impressao',{
            url:'/impressao',
            templateUrl:'form-impressao.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/cliente');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};



    
    // function to process the form
    $scope.processForm = function() {
        /*const pdf = new jsPDF();
// select the button
        let button = document.querySelector('button');
        let prep = document.getElementById("HTMLtoPDF");

        button.addEventListener('click', printPDF);
// actual PDF options
        function printPDF() {
            // @param 1 - Coordinate (in units declared at inception of PDF document) against left edge of the page
            // @param 2 - Coordinate (in units declared at inception of PDF document) against upper edge of the page
            // @param 3 - String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
            pdf.fromHTML(`${prep.innerHTML}`, 10, 10);
            // save the PDF document (downloadable)
            pdf.save("contrato");

        }*/
        let prep = document.getElementById("HTMLtoPDF").textContent;


        var arroz = prep;
        var docDefinition = { content:
            [
                {
                    text: arroz,
                    style: 'header'

                },

            ],
            styles:
                {
                    header: {
                        fontSize: 12,
                        bold: false
                    }
                }
        };
        pdfMake.createPdf(docDefinition).open();
         console.log("foi");

    };

    
});

