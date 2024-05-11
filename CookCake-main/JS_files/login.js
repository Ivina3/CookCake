        $(document).ready(function() {
            var $loginMsg = $('.loginMsg'),
                $login = $('.login'),
                $signupMsg = $('.signupMsg'),
                $signup = $('.signup'),
                $frontbox = $('.frontbox');

            var autoSwitchInterval; // Переменная для хранения интервала автоматического переключения
            var autoSwitch = true; // Флаг для управления автоматическим переключением

            // Функция для переключения форм
            function switchForms() {
                $loginMsg.toggleClass("visibility");
                $frontbox.toggleClass("moving");
                $signupMsg.toggleClass("visibility");
                $signup.toggleClass('hide');
                $login.toggleClass('hide');
            }

            // Функция для запуска или остановки автоматического переключения
            function toggleAutoSwitch() {
                if (autoSwitch) {
                    autoSwitchInterval = setInterval(function() {
                        switchForms();
                    }, 3000);
                } else {
                    clearInterval(autoSwitchInterval);
                }
            }

            // Обработчики кликов по кнопкам переключения
            $('#switch1').on('click', function() {
                switchForms();
                autoSwitch = false;
                toggleAutoSwitch();
            });

            $('#switch2').on('click', function() {
                switchForms();
                autoSwitch = false;
                toggleAutoSwitch();
            });


            toggleAutoSwitch();
        });