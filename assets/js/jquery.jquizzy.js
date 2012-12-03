/**`
 * --------------------------------------------------------------------
 * jQuizzy - jQuery plugin for creating quizzes
 * by Siddharth S - www.ssiddharth.com
 * Copyright (c) 2012 Siddharth
 * Version: 1.3	
 
 * edited by Tim AhaQuize © 2012
 * --------------------------------------------------------------------
 **/
(function ($) {

var name = "Adek";
var lebar= 0;

    $.fn.jquizzy = function (settings) 
	{

        var defaults = 
		{
            questions: null,
            startText: '',
            endText: '',
            splashImage: '../img/start.png',
            
            resultComments: {
                perfect: '',
                excellent: '',
                good: '',
                average: '',
                bad: '',
                poor: '',
                worst: '',
				KD1: '',
				KD12: '',
				KD1P: '',
                KD2: '', 
                KD22: '', 
				KD2P: '',
				KD3: '',
				KD32: '',
				KD3P: '',
                KD4: '', 
                KD42: '',
				KD4P: '',				
				KD5: '',
				KD52: '',
				KD5P: '',
            }

        };
		
        var config = $.extend(defaults, settings);
        if (config.questions === null) 
		{
            $(this).html('<div class="intro-container slide-container"><h2 class="qTitle">Failed to parse questions.</h2></div>');
            return;
        }
		
		var superContainer = $(this),
            answers = [],
            introFob = '<'+show_prompt()+'><div class="progress-keeper" ><div class="progress"></div></div><div class="intro-container slide-container"><ul class="text-block2"><li><h1><strong>Petunjuk ahaQuize</strong></h1></li><li><h1>&raquo; Pilih <b>salah satu</b> jawaban</h1></li><li><h1>&raquo; Klik tombol <strong>Next</strong> untuk melanjutkan</h1></li><li><h1>&raquo; Klik tombol <strong>Prev</strong> untuk kembali</h1></li><li><h1>&raquo; Klik tombol <strong>Finish</strong> dan lihat hasil kuis</h1></li></ul><a class="tombol nav-start" href="#quize" style="color:#ffffff;">Mulai</a></div>',
            exitFob = '<div class="results-container slide-container"><div class="question-number">' + config.endText + '</div><div class="result-keeper"></div></div><div class="notice alert alert-error"><h4>Ops, pilih jawaban terlebih dahulu!</h4></div>';
		
		
		function show_prompt()
		{
				contentFob = '';
		}		
		
		superContainer.addClass('main-quiz-holder');
        
        for (questionsIteratorIndex = 0; questionsIteratorIndex < config.questions.length; questionsIteratorIndex++) 
		{
            /*
			var acak=0;
			var j=0;
			boolean exist=false;
			do{
			acak=Math.floor(Math.random()*9);
			exist=false
				for(j=0; j < questionsIteratorIndex; j++)
				{
					if(config.questions[questionsIteratorIndex]==config.questions[acak])
					{
					exist=true;
					break;
					}
				}
			}while(j!=questionsIteratorIndex && exist);
			config.questions[questionsIteratorIndex]=config.questions[acak];
			*/
			
			contentFob += '<div class="slide-container">' + '<div class="question">' + config.questions[questionsIteratorIndex].question + '</div><ul class="answers">';
            
			for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[questionsIteratorIndex].answers.length; answersIteratorIndex++) 
			{
                contentFob += '<li>' + config.questions[questionsIteratorIndex].answers[answersIteratorIndex] + '</li>';
            }

			contentFob += '</ul><div class="nav-container">';


            if (questionsIteratorIndex !== 0) 
			{
                contentFob += '<div class="prev"><a href="" style="color:#ffffff;"><i class="icon-arrow-left icon-white" style="margin-top:1px;"></i> <b>Prev</b></a></div>';
            }
            if (questionsIteratorIndex < config.questions.length - 1) 
			{
                contentFob += '<div class="next"><a href="" style="color:#ffffff;"><b>Next</b> <i class="icon-arrow-right icon-white" style="margin-top:1px;"></i></a></div>';
            } 
			else 
			{
                contentFob += '<div class="next final"><a href="" style="color:#ffffff;"><b>Finish</b> <i class="icon-ok icon-white" style="margin-top:1px;"></i></a></div>';
            }

            contentFob += '</div></div>';
            answers.push(config.questions[questionsIteratorIndex].correctAnswer);
        }

        superContainer.html(introFob + contentFob + exitFob);

        var progress = superContainer.find('.progress'),
            progressKeeper = superContainer.find('.progress-keeper'),
            notice = superContainer.find('.notice'),
            progressWidth = 100,
            userAnswers = [],
            questionLength = config.questions.length,
            slidesList = superContainer.find('.slide-container');		
		
        function checkAnswers() 
		{
            var resultArr = [],
                flag = false;
            for (i = 0; i < answers.length; i++) 
			{

                if (answers[i] == userAnswers[i]) 
				{
                    flag = true;
                } 
				else 
				{
                    flag = false;
                }
                resultArr.push(flag);
            }
            return resultArr;
        }

        function roundReloaded(num, dec) {
            var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
            return result;
        }

        function judgeSkills(score) {
            var returnString;
            if (score == 100) return config.resultComments.perfect;
            else if (score > 90) return config.resultComments.excellent;
            else if (score > 70) return config.resultComments.good;
            else if (score > 50) return config.resultComments.average;
            else if (score > 35) return config.resultComments.bad;
            else if (score > 20) return config.resultComments.poor;
            else return config.resultComments.worst;
        }
/**
 * --------------------------------------------------------------------
Mulai - Skoring Kompetensi
 * --------------------------------------------------------------------
 **/		
		function kompetensi1() {
			if ((userAnswers[0] !== 5) && (userAnswers[1] !== 2 ))
			return config.resultComments.KD1;
			if ((userAnswers[0] !== 5) ||  (userAnswers[1] !== 2 ))
			return config.resultComments.KD12;
			if ((userAnswers[0] === 5) &&  (userAnswers[1] === 2 ))
			return config.resultComments.KD1P;
}

		function kompetensi2() {
			if  ((userAnswers[2] !== 2) && (userAnswers[3] !== 4) )
			return config.resultComments.KD2;
			if  ((userAnswers[2] !== 2) || (userAnswers[3] !== 4) )
			return config.resultComments.KD22;	
			if  ((userAnswers[2] === 2) && (userAnswers[3] === 4) )
			return config.resultComments.KD2P;	
}

function kompetensi3() {
			if ((userAnswers[4] !== 3) && (userAnswers[5] !== 4) )
			return config.resultComments.KD3;
			if  ((userAnswers[4] !== 3) || (userAnswers[5] !== 4) )
			return config.resultComments.KD32;
			if  ((userAnswers[4] === 3) && (userAnswers[5] === 4) ) return config.resultComments.KD3P;
}

function kompetensi4() {
			if ((userAnswers[6] !== 1) && (userAnswers[7] !== 2) )
			return config.resultComments.KD4;
			if ((userAnswers[6] !== 1) || (userAnswers[7] !== 2) )
			return config.resultComments.KD42;
			if ((userAnswers[6] === 1) && (userAnswers[7] === 2) ) return config.resultComments.KD4P;
			
}

function kompetensi5() {
		
			if ((userAnswers[8] !== 5) && (userAnswers[9] !== 1) )
			return config.resultComments.KD5;
			if ((userAnswers[8] !== 5) || (userAnswers[9] !== 1) )
			return config.resultComments.KD52;
			if ((userAnswers[8] === 5) && (userAnswers[9] === 1) )
			return config.resultComments.KD5P;
}
/**
 * --------------------------------------------------------------------
Akhir - Skoring Kompetensi
 * --------------------------------------------------------------------
 **/
	

        progressKeeper.hide();
        notice.hide();
        slidesList.hide().first().fadeIn(200);

        superContainer.find('li').click(function () {
            var thisLi = $(this);

            if (thisLi.hasClass('selected')) {
                thisLi.removeClass('selected');
            } else {
                thisLi.parents('.answers').children('li').removeClass('selected');
                thisLi.addClass('selected');
            }
        });

        superContainer.find('.nav-start').click(function () {

            $(this).parents('.slide-container').fadeOut(200, function () {
                $(this).next().slideDown(200);
                progressKeeper.fadeIn(200);
            });
            return false;

        });

        superContainer.find('.next').click(function () {

            if ($(this).parents('.slide-container').find('li.selected').length === 0) {
                notice.slideDown(100);
                return false;
            }

            notice.hide();
            $(this).parents('.slide-container').slideUp(200, function () {
                $(this).next().slideDown(200);
            });
			lebar += questionLength;
            progress.animate({
                width: '0'+lebar+'%'
            }, 200);
			return false;
        });

        superContainer.find('.prev').click(function () {
            notice.hide();
            $(this).parents('.slide-container').slideUp(200, function () {
                $(this).prev().slideDown(200);
            });

			lebar -= questionLength;
            progress.animate({
                width: '0'+lebar+'%'
            }, 200);
            return false;
        });

        superContainer.find('.final').click(function () {
            if ($(this).parents('.slide-container').find('li.selected').length === 0) {
                notice.slideDown(100);
                return false;
            }

            superContainer.find('li.selected').each(function (index) {
                userAnswers.push($(this).parents('.answers').children('li').index($(this).parents('.answers').find('li.selected')) + 1);
            });

            progressKeeper.hide();
            var results = checkAnswers(),
                resultSet = '',
                trueCount = 0,
                shareButton = '',
                score;
            for (var i = 0, toLoopTill = results.length; i < toLoopTill; i++) {
                if (results[i] === true) {
                    trueCount++;
                    isCorrect = true;
                }
                resultSet += '<div class="result-row"> Pertanyaan # ' + (i + 1) + (results[i] === true ? "<div class='correct'><span>Benar</span></div>" : "<div class='wrong'><span>Salah</span></div>");
                resultSet += '<div class="resultsview-qhover">' + config.questions[i].question;
                resultSet += "<ul>";
                for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[i].answers.length; answersIteratorIndex++) {
                    var classestoAdd = '';
                    if (config.questions[i].correctAnswer == answersIteratorIndex + 1) {
                        classestoAdd += 'right';
                    }
                    if (userAnswers[i] == answersIteratorIndex + 1) {
                        classestoAdd += ' selected';
                    }
                    resultSet += '<li class="' + classestoAdd + '">' + config.questions[i].answers[answersIteratorIndex] + '</li>';
                }
                resultSet += '</ul></div></div>';

            }
            score = roundReloaded(trueCount / questionLength * 100, 2);
            resultSet = '<h2 class="qTitle">' + judgeSkills(score) + '</h2><h3>'+ kompetensi1() + kompetensi2() + kompetensi3() + kompetensi4() + kompetensi5() +'</h3>'+ '<h2 class="qTitle">' + 'Nilai Anda:'+ ' ' + score + '</h2>' + shareButton + resultSet +'<div class="jquizzy-clear"></div>'+'<div class="row" style="margin-top:50px;"><a href="../ahaQuize/index.html" class="tombol nav-start2" style="color:#ffffff">Kembali</a></div>';
            superContainer.find('.result-keeper').html(resultSet).show(200);
            superContainer.find('.resultsview-qhover').hide();
            superContainer.find('.result-row').hover(function () {
                $(this).find('.resultsview-qhover').show();
            }, function () {
                $(this).find('.resultsview-qhover').hide();
            });
            $(this).parents('.slide-container').fadeOut(200, function () {
                $(this).next().fadeIn(200);
            });
            return false;
        });
    };
})(jQuery);