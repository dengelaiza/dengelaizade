pageEngine.init('.wrapper', ['#2b115a','#033504','#690606'])
            .addSection('section1')
            .addComponent( {
                type: 'base',
                className: 'text1',
                width: 150,
                height: 150,
                text: '购物车来啦',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    left: '100px',
                    top:'400px',
                    backgroundImage: 'url(./src/img/che.png)',
                    backgroundSize: '100% 100%',                        
                    padding: '20px',
                    lineHeight: '25px'
                },
                animateIn: {
                    opacity: 1,
                    left: 500,
                },
                animateOut: {
                    opacity: 0,
                    bottom: 0
                },
                delay: 300,
                event: {
                    click: function () {
                        alert($(this).text());
                    }
                }
            })            
            .addSection('section2')
                .addComponent({
                    type: 'base',
                    className: '车来啦',
                    width: 522,
                    height: 336,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addSection('section3')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 522,
                            height: 336,
                            text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/dialog.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 240,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })                   
        .load();

