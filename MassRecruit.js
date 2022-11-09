// ==UserScript==
/* eslint-disable */
// @name         Mass Recruiting
// @namespace    https://br114.tribalwars.com.br
// @version      1.0
// @description  Faz recrutamento de acordo com a tropa build que deseja
// @author       Vodkazera
// @include https://br*.tribalwars.com.br/*&screen=barracks*
// @include https://br*.tribalwars.com.br/*&screen=stable*
// @include https://br*.tribalwars.com.br/*&screen=garage*
// @include https://br*.tribalwars.com.br/*&screen=train*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// ==/UserScript==

(function () {
    var vodkazeraTW = TribalWars.getGameData();
    var tag = vodkazeraTW.world + '' + vodkazeraTW.player.name + '' + vodkazeraTW.screen + '_' + vodkazeraTW.mode;
    unsafeWindow.window.name = tag;


    if (unsafeWindow.window.name == tag) {
        alert("quantidade de fazenda é : " + (verificaPopulacaoMaxima() - verificaPopulacaoAtual()) + " população necessário: " + verificaPopulacaoNecessariaParaExecucao() + " população o tempo de recrutamento vai ser: " + (tempoDeExecucaoDeAcordoComQuantidadeDeTropas() / 60) + " minutos.");
        iniciarRecrutamento(tempoDeExecucaoDeAcordoComQuantidadeDeTropas());
    }
    function iniciarRecrutamento(tempoSegundos) {

        setInterval(function () {

            if ((verificaPopulacaoMaxima() - verificaPopulacaoAtual()) > verificaPopulacaoNecessariaParaExecucao()) {
                if (vodkazeraTW.screen == constString().recrutamento) {
                    if (valorDisponivelPorItem(constString().lanceiro) >= parametrizacaoGeral().spear) {
                        assumirControleDoInput(constString().lanceiro).value = parametrizacaoGeral().spear;
                        adicionarValorAoInput(assumirControleDoInput(constString().lanceiro));
                    }
                    if (valorDisponivelPorItem(constString().barbaro) >= parametrizacaoGeral().axe) {
                        assumirControleDoInput(constString().barbaro).value = parametrizacaoGeral().axe;
                        adicionarValorAoInput(assumirControleDoInput(constString().barbaro));
                    }
                    if (valorDisponivelPorItem(constString().espadachim) >= parametrizacaoGeral().sword) {
                        assumirControleDoInput(constString().espadachim).value = parametrizacaoGeral().sword;
                        adicionarValorAoInput(assumirControleDoInput(constString().espadachim));
                    }
                    if (valorDisponivelPorItem(constString().arqueiro) >= parametrizacaoGeral().archer) {
                        assumirControleDoInput(constString().arqueiro).value = parametrizacaoGeral().archer;
                        adicionarValorAoInput(assumirControleDoInput(constString().arqueiro));
                    }
                    if (valorDisponivelPorItem(constString().explorador) >= parametrizacaoGeral().spy) {
                        assumirControleDoInput(constString().explorador).value = parametrizacaoGeral().spy;
                        adicionarValorAoInput(assumirControleDoInput(constString().explorador));
                    }
                    if (valorDisponivelPorItem(constString().cavalarialeve) >= parametrizacaoGeral().light) {
                        assumirControleDoInput(constString().cavalarialeve).value = parametrizacaoGeral().light;
                        adicionarValorAoInput(assumirControleDoInput(constString().cavalarialeve));
                    }
                    if (valorDisponivelPorItem(constString().cavalariapesada) >= parametrizacaoGeral().heavy) {
                        assumirControleDoInput(constString().cavalariapesada).value = parametrizacaoGeral().heavy;
                        adicionarValorAoInput(assumirControleDoInput(constString().cavalariapesada));
                    }
                    if (valorDisponivelPorItem(constString().arqueirocavalo) >= parametrizacaoGeral().marcher) {
                        assumirControleDoInput(constString().arqueirocavalo).value = parametrizacaoGeral().marcher;
                        adicionarValorAoInput(assumirControleDoInput(constString().arqueirocavalo));
                    }
                    if (valorDisponivelPorItem(constString().catapulta) >= parametrizacaoGeral().catapult) {
                        assumirControleDoInput(constString().catapulta).value = parametrizacaoGeral().catapult;
                        adicionarValorAoInput(assumirControleDoInput(constString().catapulta));
                    }
                    if (valorDisponivelPorItem(constString().ariete) >= parametrizacaoGeral().ram) {
                        assumirControleDoInput(constString().ariete).value = parametrizacaoGeral().ram;
                        adicionarValorAoInput(assumirControleDoInput(constString().ariete));
                    }

                }
                else if (vodkazeraTW.screen == constString().quartel) {
                    if (valorDisponivelPorItem(constString().lanceiro) >= parametrizacaoGeral().spear) {
                        assumirControleDoInput(constString().lanceiro).value = parametrizacaoGeral().spear;
                        adicionarValorAoInput(assumirControleDoInput(constString().lanceiro));
                    }
                    if (valorDisponivelPorItem(constString().barbaro) >= parametrizacaoGeral().axe) {
                        assumirControleDoInput(constString().barbaro).value = parametrizacaoGeral().axe;
                        adicionarValorAoInput(assumirControleDoInput(constString().barbaro));
                    }
                    if (valorDisponivelPorItem(constString().espadachim) >= parametrizacaoGeral().sword) {
                        assumirControleDoInput(constString().espadachim).value = parametrizacaoGeral().sword;
                        adicionarValorAoInput(assumirControleDoInput(constString().espadachim));
                    }
                    if (valorDisponivelPorItem(constString().arqueiro) >= parametrizacaoGeral().archer) {
                        assumirControleDoInput(constString().arqueiro).value = parametrizacaoGeral().archer;
                        adicionarValorAoInput(assumirControleDoInput(constString().arqueiro));
                    }

                } else if (vodkazeraTW.screen == constString().estabulo) {
                    if (valorDisponivelPorItem(constString().explorador) >= parametrizacaoGeral().spy) {
                        assumirControleDoInput(constString().explorador).value = parametrizacaoGeral().spy;
                        adicionarValorAoInput(assumirControleDoInput(constString().explorador));
                    }
                    if (valorDisponivelPorItem(constString().cavalarialeve) >= parametrizacaoGeral().light) {
                        assumirControleDoInput(constString().cavalarialeve).value = parametrizacaoGeral().light;
                        adicionarValorAoInput(assumirControleDoInput(constString().cavalarialeve));
                    }
                    if (valorDisponivelPorItem(constString().cavalariapesada) >= parametrizacaoGeral().heavy) {
                        assumirControleDoInput(constString().cavalariapesada).value = parametrizacaoGeral().heavy;
                        adicionarValorAoInput(assumirControleDoInput(constString().cavalariapesada));
                    }
                    if (valorDisponivelPorItem(constString().arqueirocavalo) >= parametrizacaoGeral().marcher) {
                        assumirControleDoInput(constString().arqueirocavalo).value = parametrizacaoGeral().marcher;
                        adicionarValorAoInput(assumirControleDoInput(constString().arqueirocavalo));
                    }
                } else if (vodkazeraTW.screen == constString().oficina) {
                    if (valorDisponivelPorItem(constString().catapulta) >= parametrizacaoGeral().catapult) {
                        assumirControleDoInput(constString().catapulta).value = parametrizacaoGeral().catapult;
                        adicionarValorAoInput(assumirControleDoInput(constString().catapulta));
                    }
                    if (valorDisponivelPorItem(constString().ariete) >= parametrizacaoGeral().ram) {
                        assumirControleDoInput(constString().ariete).value = parametrizacaoGeral().ram;
                        adicionarValorAoInput(assumirControleDoInput(constString().ariete));
                    }

                }
                setTimeout(confirmar, 1000);

            } else {
                alert('Sua populacao é menor que o necessário para prosseguir com o processo de recrutamento, por favor suba sua fazenda!');
            }

        }, tempoSegundos * 1000);

    }

    function confirmar() {
        $(".btn-recruit").click(); // eslint-disable-line
    }

    function parametrizacaoGeral() {
        var modeloDeTropas = new Object();
        modeloDeTropas.spear = 1;
        modeloDeTropas.axe = 0;
        modeloDeTropas.sword = 1;
        modeloDeTropas.archer = 1;
        modeloDeTropas.spy = 1;
        modeloDeTropas.light = 0;
        modeloDeTropas.heavy = 1;
        modeloDeTropas.marcher = 0;
        modeloDeTropas.ram = 0;
        modeloDeTropas.catapult = 0;

        return modeloDeTropas

    }

    function limiteDeTropas(tipoDeTropa) {

        var modeloDeTropas = new Object();
        if (tipoDeTropa == 'defesa') {
            modeloDeTropas.spear = 8300;
            modeloDeTropas.axe = 0;
            modeloDeTropas.sword = 3000;
            modeloDeTropas.archer = 5000;
            modeloDeTropas.spy = 500;
            modeloDeTropas.light = 200;
            modeloDeTropas.heavy = 600;
            modeloDeTropas.marcher = 0;
            modeloDeTropas.ram = 0;
            modeloDeTropas.catapult = 25;
        } else if (tipoDeTropa == 'ataque') {
            modeloDeTropas.spear = 0;
            modeloDeTropas.axe = 6100;
            modeloDeTropas.sword = 0;
            modeloDeTropas.archer = 0;
            modeloDeTropas.spy = 100;
            modeloDeTropas.light = 2100;
            modeloDeTropas.heavy = 0;
            modeloDeTropas.marcher = 700;
            modeloDeTropas.ram = 400;
            modeloDeTropas.catapult = 25;
        }

        return modeloDeTropas
    }


    function constString() {
        var modelo = new Object();

        modelo.lanceiro = 'spear';
        modelo.espadachim = 'sword';
        modelo.barbaro = 'axe';
        modelo.arqueiro = 'archer';
        modelo.explorador = 'spy';
        modelo.cavalarialeve = 'light';
        modelo.cavalariapesada = 'heavy';
        modelo.arqueirocavalo = 'marcher';
        modelo.ariete = 'ram';
        modelo.catapulta = 'catapult';
        modelo.estabulo = 'stable';
        modelo.oficina = 'garage';
        modelo.quartel = 'barracks';
        modelo.recrutamento = 'train';


        return modelo;

    }

    function tempoDeExecucaoDeAcordoComQuantidadeDeTropas() {

        var tempoMedioConsiderado = 0;

        var tempoQuartel = (tempoPorTropa(constString().lanceiro) * parametrizacaoGeral().spear) +
            (tempoPorTropa(constString().espadachim) * parametrizacaoGeral().sword) +
            (tempoPorTropa(constString().arqueiro) * parametrizacaoGeral().archer) +
            (tempoPorTropa(constString().barbaro) * parametrizacaoGeral().axe);

        var tempoEstabulo = (tempoPorTropa(constString().explorador) * parametrizacaoGeral().spy) +
            (tempoPorTropa(constString().cavalarialeve) * parametrizacaoGeral().light) +
            (tempoPorTropa(constString().cavalariapesada) * parametrizacaoGeral().heavy);

        var tempoOficina = (tempoPorTropa(constString().catapulta) * parametrizacaoGeral().catapult) +
            (tempoPorTropa(constString().arqueirocavalo) * parametrizacaoGeral().marcher) +
            (tempoPorTropa(constString().ariete) * parametrizacaoGeral().ram);

        if (tempoQuartel > tempoEstabulo && tempoQuartel > tempoOficina) {
            tempoMedioConsiderado = tempoQuartel;
        } else if (tempoEstabulo > tempoQuartel && tempoEstabulo > tempoOficina) {
            tempoMedioConsiderado = tempoEstabulo;
        } else if (tempoOficina > tempoQuartel && tempoOficina > tempoEstabulo) {
            tempoMedioConsiderado = tempoOficina;
        }


        return tempoMedioConsiderado * 60;
    }


    function verificaPopulacaoNecessariaParaExecucao() {

        var populacaoTotal = 0;

        if (vodkazeraTW.screen == constString().recrutamento) {

            if (parametrizacaoGeral().spear > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().lanceiro);
            }
            if (parametrizacaoGeral().sword > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().espadachim);
            }
            if (parametrizacaoGeral().axe > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().barbaro);
            }
            if (parametrizacaoGeral().archer > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().arqueiro);
            }
            if (parametrizacaoGeral().spy > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().explorador);
            }
            if (parametrizacaoGeral().light > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().cavalarialeve);
            }
            if (parametrizacaoGeral().heavy > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().cavalariapesada);
            }
            if (parametrizacaoGeral().marcher > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().arqueirocavalo);
            }
            if (parametrizacaoGeral().catapult > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().catapulta);
            }
            if (parametrizacaoGeral().ram > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().ariete);
            }


        } else if (vodkazeraTW.screen == constString().estabulo) {

            if (parametrizacaoGeral().spy > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().explorador);
            }
            if (parametrizacaoGeral().light > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().cavalarialeve);
            }
            if (parametrizacaoGeral().heavy > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().cavalariapesada);
            }
            if (parametrizacaoGeral().marcher > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().arqueirocavalo);
            }

        } else if (vodkazeraTW.screen == constString().quartel) {
            if (parametrizacaoGeral().spear > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().lanceiro);
            }
            if (parametrizacaoGeral().sword > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().espadachim);
            }
            if (parametrizacaoGeral().axe > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().barbaro);
            }
            if (parametrizacaoGeral().archer > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().arqueiro);
            }

        } else if (vodkazeraTW.screen == constString().oficina) {
            if (parametrizacaoGeral().catapult > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().catapulta);
            }
            if (parametrizacaoGeral().ram > 0) {
                populacaoTotal = populacaoTotal + valorPopulacaoDeAcordoComItem(constString().ariete);
            }
        }



        return populacaoTotal;
    }


    function valorPopulacaoDeAcordoComItem(item) {

        return parseInt($("#" + item + "_0_cost_pop").text())
    }


    function verificaPopulacaoAtual() {
        return parseInt($("#pop_current_label").text())
    }

    function verificaPopulacaoMaxima() {
        return parseInt($("#pop_max_label").text())
    }

    function calcularPercent(valorMinimo, valorMaximo) {

        return Math.floor((valorMinimo * 100) / valorMaximo);

    }

    function tempoPorTropa(item) {

        var tempoTropa = parseInt($("#" + item + "_0_cost_time").text().substring(2, 4));

        if (Number.isNaN(tempoTropa)) {
            tempoTropa = 0;
        }

        return tempoTropa;
    }


    function valorDisponivelPorItem(item) {
        return parseInt($("#" + item + "_0_a").text().replace('(', '').replace(')', ''));
    }

    function assumirControleDoInput(item) {
        return document.getElementsByName(item)[0];
    }

    function adicionarValorAoInput(item) {
        return item.dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
    }

})();