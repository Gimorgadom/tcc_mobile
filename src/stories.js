const stories = [
    {
        "id": 1,
        "title": "Bullying",
        "descriptionP": "Os colegas de Pedrinho ficam empurrando suas costas durante a aula, está sendo muito chato ir para a escola, e pedrinho se sente muito triste",
        "descriptionA": "Os colegas de Aninha ficam empurrando suas costas durante a aula, está sendo muito chato ir para a escola, e Aninha se sente muito triste",        
        "imgP": require("./imagens/bully_p.jpeg"),
        "imgA": require("./imagens/bully_a.jpeg"),
        "vertices":[
            {
                "value": "A",
                "textP": "É um dia chuvoso. A  mãe de Pedrinho foi acordá-lo. O que ele deve fazer?",
                "textA": "É um dia chuvoso. A  mãe de Aninha foi acordá-la. O que ela deve fazer?",
                "midia": {
                    "descriptionScene": {
                        "audioP": "waking_up_p.mp3",
                        "audioA": "waking_up_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "thunder.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "imgP": require("./imagens/waking_up_p.jpeg"),
                "imgA": require("./imagens/waking_up_a.jpeg"),
                "arestas": [
                    {
                        "destiny": "B",
                        "text": "Levantar"
                    },
                    {
                        "destiny": "C",
                        "text":"Fingir que está doente"
                    },
                    {
                        "destiny": "D",
                        "text":"Contar para a sua mãe"
                    }
                ]
            },
            {
                "value": "B",
                "textP": "Pedrinho nem tomou café da manhã, ir para escola deixa ele sem fome. Ele entrou no carro com sua mãe, e sua mãe lhe perguntou o que estava acontecendo.",
                "textA": "Aninha nem tomou café da manhã, ir para escola deixa ela sem fome. Ela entrou no carro com sua mãe, e sua mãe lhe perguntou o que estava acontecendo.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "on_the_car_p.mp3",
                        "audioA": "on_the_car_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "on_the_car_suburban.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "rain_on_the_car.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "imgP": require("./imagens/on_the_car_p.jpeg"),
                "imgA": require("./imagens/on_the_car_a.jpeg"),
                "arestas":[
                    {
                        "destiny": "E",
                        "text":"Contar para ela"
                    },
                    {
                        "destiny": "F",
                        "text":"Melhor não falar nada"
                    }
                ]
            },
            {
                "value": "C",
                "textP":"A mãe de Pedrinho, tentou medir a temperatura dele com a mão, e percebeu que ele não estava quente. Após isso ela perguntou o que ele tem",
                "textA":"A mãe de Aninha, tentou medir a temperatura dela com a mão, e percebeu que ela não estava quente. Após isso ela perguntou o que Aninha tem",
                "midia": {
                    "descriptionScene": {
                        "audioP": "try_sick_p.mp3",
                        "audioA": "try_sick_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "thunder.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "imgP": require("./imagens/try_sick_p.jpeg"),
                "imgA": require("./imagens/try_sick_a.jpeg"),
                "arestas":[
                    {
                        "destiny":"B",
                        "text": "Falar que não é nada e levantar."
                    },
                    {
                        "destiny":"G",
                        "text": "Fingir que está com dor de barriga."
                    }
                ]
            },
            {
                "value": "D",
                "imgP": require("./imagens/tell_to_mom_p.jpeg"),
                "imgA": require("./imagens/tell_to_mom_a.jpeg"),
                "textP": "A mãe de Pedrinho ficou um pouco impressionada com o que estava acontecendo, ela o abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "textA": "A mãe de Aninha ficou um pouco impressionada com o que estava acontecendo, ela a abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "tell_mom_p.mp3",
                        "audioA": "tell_mom_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "thunder.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "arestas": []
            },
            {
                "value": "E",
                "imgP": require("./imagens/on_the_car_p.jpeg"),
                "imgA": require("./imagens/on_the_car_a.jpeg"),
                "textP": " A mãe de Pedrinho ficou um pouco impressionada com o que estava acontecendo, ela disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "textA": " A mãe de Aninha ficou um pouco impressionada com o que estava acontecendo, ela disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "tell_mom_p.mp3",
                        "audioA": "tell_mom_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "on_the_car_suburban.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "rain_on_the_car.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "arestas": []
            },
            {
                "value": "F",
                "imgP": require("./imagens/at_the_school_p.jpeg"),
                "imgA": require("./imagens/at_the_school_a.jpeg"),
                "textP": "Agora ele está na sala de aula, a professora está explicando a matéria, mas sempre que a professora vira para a lousa, os colegas  de classe de Pedrinho empurram as costas dele e dão risada, para Pedrinho isso é muito irritante.",
                "textA": "Agora ela está na sala de aula, a professora está explicando a matéria, mas sempre que a professora vira para a lousa, os colegas  de classe de Aninha empurram as costas dele e dão risada, para Aninha isso é muito irritante.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "at_the_school_p.mp3",
                        "audioA": "at_the_school_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain_on_roof.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "at_the_classroom.mp3",
                            "repeat": true,
                            "volume": 0.1
                        }
                    ]
                },
                "arestas": [
                    {
                        "destiny": "H",
                        "text":"Conversar com a professora."
                    },
                    {
                        "destiny": "I",
                        "text":"Empurrar os colegas de classe também."
                    },
                    {
                        "destiny": "J",
                        "text": "Não fazer nada, um dia isso vai passar."
                    }
                ]
            },
            {
                "value": "G",
                "imgP": require("./imagens/stay_at_home_p.jpeg"),
                "imgA": require("./imagens/stay_at_home_a.jpeg"),
                "textP": "A mãe de Pedrinho disse que ele não precisa ir para escola. Mas ele sabe que não pode continuar mentindo todos os dias. E percebeu que nada mudou, e ele só se livrou por hoje. Ele sabe que amanhã as crianças continuarão irritando ele.",
                "textA": "A mãe de Aninha disse que ela não precisa ir para escola. Mas ela sabe que não pode continuar mentindo todos os dias. E percebeu que nada mudou, e ela só se livrou por hoje. Ela sabe que amanhã as crianças continuarão irritando ela.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "stay_home_p.mp3",
                        "audioA": "stay_home_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "thunder.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "arestas": []
            },
            {
                "value": "H",
                "imgP": require("./imagens/tell_to_teacher_p.jpeg"),
                "imgA": require("./imagens/tell_to_teacher_a.jpeg"),
                "textP": "Ele contou para a professora no final da aula o que estava acontecendo, ela disse que vai prestar mais atenção. E que vai ajudar ele a encarar isso. Pedrinho, agora, se sente melhor em saber que irão ajudar ele com isso.",
                "textA": "Ela contou para a professora no final da aula o que estava acontecendo, ela disse que vai prestar mais atenção. E que vai ajudar ela a encarar isso. Aninha, agora, se sente melhor em saber que irão ajudar ela com isso.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "tell_teacher_p.mp3",
                        "audioA": "tell_teacher_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain_on_roof.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "arestas": []
            },
            {
                "value": "I",
                "imgP": require("./imagens/calling_to_mom_p.jpeg"),
                "imgA": require("./imagens/calling_to_mom_a.jpeg"),
                "textP": "A professora viu que Pedrinho empurrou os colegas de classe. Ele tentou se explicar mas não adiantou contar que eles também estavam fazendo isso. Ligaram para mãe de Pedrinho e ela vai ter que ir até a escola para conversar com a diretora.",
                "textA": "A professora viu que Aninha empurrou os colegas de classe. Ela tentou se explicar mas não adiantou contar que eles também estavam fazendo isso. Ligaram para mãe de Aninha e ela vai ter que ir até a escola para conversar com a diretora.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "calling_to_mom_p.mp3",
                        "audioA": "calling_to_mom_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain_on_roof.mp3",
                            "repeat": true,
                            "volume": 0.9
                        },
                        {
                            "audio": "phone_ringing.mp3",
                            "repeat": true,
                            "volume": 0.1
                        }
                    ]
                },
                "arestas": []
            },
            {
                "value": "J",
                "imgP": require("./imagens/dont_do_anything_p.jpeg"),
                "imgA": require("./imagens/dont_do_anything_a.jpeg"),
                "textP": "Ele odiou o dia de hoje foi um péssimo dia e nada mudou, amanhã as coisas vão continuar a mesma coisa.",
                "textA": "Ela odiou o dia de hoje foi um péssimo dia e nada mudou, amanhã as coisas vão continuar a mesma coisa.",
                "midia": {
                    "descriptionScene": {
                        "audioP": "dont_do_anything_p.mp3",
                        "audioA": "dont_do_anything_a.mp3",
                        "repeat": false
                    },
                    "audiosScene": [
                        {
                            "audio": "rain.mp3",
                            "repeat": true,
                            "volume": 0.9
                        }
                    ]
                },
                "arestas": []
            }
        ]
    }
]
export default stories