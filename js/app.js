
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', [ 'ngAnimate', 'ui.router'])

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
    $scope.clienteData = {};
    $scope.eventoData = {};
    $scope.pagamentoData = {};




    
    // function to process the form
    $scope.processForm = function() {
        let prep = document.getElementById("contrato").textContent;
        var docDefinition = { content:
            [
                {
                    text: prep,
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

    
})

.controller('tabs', function($scope) {
    this.tab = 1;

    this.selectTab = function (setTab){
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
})

