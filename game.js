// --- DOM Elements ---
        const homeScreen = document.getElementById('home-screen');
        const newWordsSection = document.getElementById('new-words-section');
        const completePhraseSection = document.getElementById('complete-phrase-section');
        const phrasalVerbsSection = document.getElementById('phrasal-verbs-section');
        const idiomsSection = document.getElementById('idioms-section');
        const completePhrasalVerbsSection = document.getElementById('complete-phrasal-verbs-section');
        const idiomsChallengeSection = document.getElementById('idioms-challenge-section');
        const usedToSection = document.getElementById('used-to-section');
        
        const startNewWordsBtn = document.getElementById('start-new-words-btn');
        const startCompletePhraseBtn = document.getElementById('start-complete-phrase-btn');
        const startPhrasalVerbsBtn = document.getElementById('start-phrasal-verbs-btn');
        const startIdiomsBtn = document.getElementById('start-idioms-btn');
        const startPhrasalVerbsCompletionBtn = document.getElementById('start-phrasal-verbs-completion-btn');
        const startIdiomsChallengeBtn = document.getElementById('start-idioms-challenge-btn');
        const startUsedToBtn = document.getElementById('start-used-to-btn');
        const startBeVsGoBtn = document.getElementById('start-be-vs-go-btn');
        const backToHomeBtns = document.querySelectorAll('.back-to-home-btn');

        // Get elements for dynamic text
        const appTitle = document.getElementById('app-title');
        const appFunnyTitle = document.getElementById('app-funny-title');
        const appTagline = document.getElementById('app-tagline');
        const appPracticePrompt = document.getElementById('app-practice-prompt');
        const wordsBtnPrefix = document.getElementById('words-btn-prefix');
        const wordsBtnShort = document.getElementById('words-btn-short');
        const wordsBtnLong = document.getElementById('words-btn-long');
        const completeBtnPrefix = document.getElementById('complete-btn-prefix');
        const completeBtnShort = document.getElementById('complete-btn-short');
        const completeBtnLong = document.getElementById('complete-btn-long');
        const phrasalVerbsBtnPrefix = document.querySelector('#start-phrasal-verbs-btn .lg\\:inline');
        const phrasalVerbsBtnShort = document.querySelector('#start-phrasal-verbs-btn .font-semibold.text-base:not(.lg\\:inline)');
        const phrasalVerbsBtnLong = document.querySelector('#start-phrasal-verbs-btn .text-xs');
        const verbCompletionBtnPrefix = document.querySelector('#start-phrasal-verbs-completion-btn .lg\\:inline');
        const verbCompletionBtnShort = document.querySelector('#start-phrasal-verbs-completion-btn .font-semibold.text-base.hidden.md\\:block');
        const verbCompletionBtnLong = document.querySelector('#start-phrasal-verbs-completion-btn .text-xs');
        const idiomsBtnPrefix = document.querySelector('#start-idioms-btn .lg\\:inline');
        const idiomsBtnShort = document.querySelector('#start-idioms-btn .font-semibold.text-base:not(.lg\\:inline)');
        const idiomsBtnLong = document.querySelector('#start-idioms-btn .text-xs');
        const idiomsChallengeBtnPrefix = document.querySelector('#start-idioms-challenge-btn .lg\\:inline');
        const idiomsChallengeBtnShort = document.querySelector('#start-idioms-challenge-btn .font-semibold.text-base:not(.lg\\:inline)');
        const idiomsChallengeBtnLong = document.querySelector('#start-idioms-challenge-btn .text-xs');
        const usedToBtnPrefix = document.querySelector('#start-used-to-btn .lg\\:inline');
        const usedToBtnShort = document.querySelector('#start-used-to-btn .font-semibold.text-base:not(.lg\\:inline)');
        const usedToBtnLong = document.querySelector('#start-used-to-btn .text-xs');

        // Set initial text content from MESSAGES
        appTitle.textContent = MESSAGES.app.title;
        appFunnyTitle.textContent = MESSAGES.app.funnyTitle;
        appTagline.textContent = MESSAGES.app.tagline;
        appPracticePrompt.textContent = MESSAGES.app.practicePrompt;

        wordsBtnPrefix.textContent = "A. ";
        wordsBtnShort.textContent = MESSAGES.buttons.words.short;
        wordsBtnLong.textContent = MESSAGES.buttons.words.long;

        completeBtnPrefix.textContent = "B. ";
        completeBtnShort.textContent = MESSAGES.buttons.complete.short;
        completeBtnLong.textContent = MESSAGES.buttons.complete.long;

        phrasalVerbsBtnPrefix.textContent = "C. ";
        phrasalVerbsBtnShort.textContent = MESSAGES.buttons.phrasalVerbs.short;
        phrasalVerbsBtnLong.textContent = MESSAGES.buttons.phrasalVerbs.long;

        verbCompletionBtnPrefix.textContent = "D. ";
        verbCompletionBtnShort.textContent = MESSAGES.buttons.verbCompletion.short;
        verbCompletionBtnLong.textContent = MESSAGES.buttons.verbCompletion.long;

        idiomsBtnPrefix.textContent = "E. ";
        idiomsBtnShort.textContent = MESSAGES.buttons.idioms.short;
        idiomsBtnLong.textContent = MESSAGES.buttons.idioms.long;

        idiomsChallengeBtnPrefix.textContent = "F. ";
        idiomsChallengeBtnShort.textContent = MESSAGES.buttons.idiomsChallenge.short;
        idiomsChallengeBtnLong.textContent = MESSAGES.buttons.idiomsChallenge.long;

        usedToBtnPrefix.textContent = "G. ";
        usedToBtnShort.textContent = MESSAGES.buttons.usedTo.short;
        usedToBtnLong.textContent = MESSAGES.buttons.usedTo.long;

        // New Words Elements
        const wordCard = document.getElementById('word-card');
        const wordCardContent = document.getElementById('word-card-content');
        const wordCompletionContainer = document.getElementById('word-completion-container');
        const wordCounterEl = document.getElementById('word-counter');
        const categorySelect = document.getElementById('category-select');
        const englishWordEl = document.getElementById('english-word');
        const ipaPronunciationEl = document.getElementById('ipa-pronunciation');
        const spanishWordEl = document.getElementById('spanish-word');
        const exampleSentenceEl = document.getElementById('example-sentence');
        const exampleSentenceEsEl = document.getElementById('example-sentence-es');
        const translationContainer = document.getElementById('translation-container');
        const revealBtn = document.getElementById('reveal-btn');
        const newWordBtn = document.getElementById('new-word-btn');
        const undoWordBtn = document.getElementById('undo-word-btn');
        
        // Complete Phrase Elements
        const phraseCard = document.getElementById('phrase-card');
        const phraseCardContent = document.getElementById('phrase-card-content');
        const phraseCompletionContainer = document.getElementById('phrase-completion-container');
        const finalScoreTextEl = document.getElementById('final-score-text');
        const phraseCounterEl = document.getElementById('phrase-counter');
        const phraseScoreCounterEl = document.getElementById('phrase-score-counter');
        const phraseTextEl = document.getElementById('phrase-text');
        const optionsContainerEl = document.getElementById('options-container');
        const feedbackMessageEl = document.getElementById('feedback-message');
        const explanationContainerEl = document.getElementById('explanation-container');
        const explanationTextEl = document.getElementById('explanation-text');
        const nextPhraseBtn = document.getElementById('next-phrase-btn');
        const backPhraseBtn = document.getElementById('back-phrase-btn');
        const undoPhraseBtn = document.getElementById('undo-phrase-btn');

        // Phrasal Verbs Elements
        const phrasalVerbCard = document.getElementById('phrasal-verb-card');
        const phrasalVerbCardContent = document.getElementById('phrasal-verb-card-content');
        const phrasalVerbCompletionContainer = document.getElementById('phrasal-verb-completion-container');
        const phrasalVerbCounterEl = document.getElementById('phrasal-verb-counter');
        const phrasalVerbEnglishEl = document.getElementById('phrasal-verb-english');
        const phrasalVerbExampleSentenceEl = document.getElementById('phrasal-verb-example-sentence');
        const phrasalVerbSpanishEl = document.getElementById('phrasal-verb-spanish');
        const phrasalVerbExampleSentenceEsEl = document.getElementById('phrasal-verb-example-sentence-es');
        const phrasalVerbTranslationContainer = document.getElementById('phrasal-verb-translation-container');
        const phrasalVerbRevealBtn = document.getElementById('phrasal-verb-reveal-btn');
        const newPhrasalVerbBtn = document.getElementById('new-phrasal-verb-btn');
        const undoPhrasalVerbBtn = document.getElementById('undo-phrasal-verb-btn');
        const phrasalVerbCategorySelect = document.getElementById('phrasal-verb-category-select');

        // Idioms Elements
        const idiomCard = document.getElementById('idiom-card');
        const idiomCardContent = document.getElementById('idiom-card-content');
        const idiomCompletionContainer = document.getElementById('idiom-completion-container');
        const idiomCounterEl = document.getElementById('idiom-counter');
        const idiomEnglishEl = document.getElementById('idiom-english');
        const idiomExampleSentenceEl = document.getElementById('idiom-example-sentence');
        const idiomSpanishEl = document.getElementById('idiom-spanish');
        const idiomExampleSentenceEsEl = document.getElementById('idiom-example-sentence-es');
        const idiomTranslationContainer = document.getElementById('idiom-translation-container');
        const idiomRevealBtn = document.getElementById('idiom-reveal-btn');
        const newIdiomBtn = document.getElementById('new-idiom-btn');
        const undoIdiomBtn = document.getElementById('undo-idiom-btn');
        const idiomCategorySelect = document.getElementById('idiom-category-select');

        // Complete Phrasal Verbs Elements
        const phrasalVerbsCompletionCard = document.getElementById('phrasal-verbs-completion-card');
        const phrasalVerbsCompletionCardContent = document.getElementById('phrasal-verbs-completion-card-content');
        const phrasalVerbsCompletionCompletionContainer = document.getElementById('phrasal-verbs-completion-completion-container');
        const phrasalVerbsCompletionFinalScoreTextEl = document.getElementById('phrasal-verbs-completion-final-score-text');
        const phrasalVerbsCompletionCounterEl = document.getElementById('phrasal-verbs-completion-counter');
        const phrasalVerbsCompletionScoreCounterEl = document.getElementById('phrasal-verbs-completion-score-counter');
        const phrasalVerbsCompletionTextEl = document.getElementById('phrasal-verbs-completion-text');
        const phrasalVerbsCompletionOptionsContainerEl = document.getElementById('phrasal-verbs-completion-options-container');
        const phrasalVerbsCompletionFeedbackMessageEl = document.getElementById('phrasal-verbs-completion-feedback-message');
        const phrasalVerbsCompletionExplanationContainerEl = document.getElementById('phrasal-verbs-completion-explanation-container');
        const phrasalVerbsCompletionExplanationTextEl = document.getElementById('phrasal-verbs-completion-explanation-text');
        const nextPhrasalVerbsCompletionBtn = document.getElementById('next-phrasal-verbs-completion-btn');
        const backPhrasalVerbsCompletionBtn = document.getElementById('back-phrasal-verbs-completion-btn');
        const undoPhrasalVerbsCompletionBtn = document.getElementById('undo-phrasal-verbs-completion-btn');

        // Idioms Challenge Elements
        const idiomsChallengeCard = document.getElementById('idioms-challenge-card');
        const idiomsChallengeCardContent = document.getElementById('idioms-challenge-card-content');
        const idiomsChallengeCompletionContainer = document.getElementById('idiom-challenge-completion-container');
        const idiomsChallengeFinalScoreTextEl = document.getElementById('idiom-challenge-final-score-text');
        const idiomsChallengeCounterEl = document.getElementById('idioms-challenge-counter');
        const idiomsChallengeScoreCounterEl = document.getElementById('idioms-challenge-score-counter');
        const idiomChallengeTextEl = document.getElementById('idiom-challenge-text');
        const idiomChallengeOptionsContainerEl = document.getElementById('idiom-challenge-options-container');
        const idiomChallengeFeedbackMessageEl = document.getElementById('idiom-challenge-feedback-message');
        const idiomChallengeExplanationContainerEl = document.getElementById('idiom-challenge-explanation-container');
        const idiomChallengeExplanationTextEl = document.getElementById('idiom-challenge-explanation-text');
        const nextIdiomChallengeBtn = document.getElementById('next-idiom-challenge-btn');
        const backIdiomChallengeBtn = document.getElementById('back-idiom-challenge-btn');
        const undoIdiomChallengeBtn = document.getElementById('undo-idiom-challenge-btn');

        // Used To Elements
        const usedToCard = document.getElementById('used-to-card');
        const usedToCardContent = document.getElementById('used-to-card-content');
        const usedToCompletionContainer = document.getElementById('used-to-completion-container');
        const usedToFinalScoreTextEl = document.getElementById('used-to-final-score-text');
        const usedToCounterEl = document.getElementById('used-to-counter');
        const usedToScoreCounterEl = document.getElementById('used-to-score-counter');
        const usedToTextEl = document.getElementById('used-to-text');
        const usedToOptionsContainerEl = document.getElementById('used-to-options-container');
        const usedToFeedbackMessageEl = document.getElementById('used-to-feedback-message');
        const usedToExplanationContainerEl = document.getElementById('used-to-explanation-container');
        const usedToExplanationTextEl = document.getElementById('used-to-explanation-text');
        const nextUsedToBtn = document.getElementById('next-used-to-btn');
        const backUsedToBtn = document.getElementById('back-used-to-btn');
        const undoUsedToBtn = document.getElementById('undo-used-to-btn');


        // State
        let sessionWords = [];
        let sessionIndex = 0;
        let sessionPhrases = [];
        let sessionPhraseIndex = 0;
        let phraseAnswered = false;
        let phraseScore = { correct: 0, incorrect: 0 };
        let sessionAnswers = {}; // To store user answers for the back button functionality
        let optionButtons = [];

        let sessionPhrasalVerbs = [];
        let sessionPhrasalVerbIndex = 0;

        let sessionIdioms = [];
        let sessionIdiomIndex = 0;

        let sessionPhrasalVerbsCompletion = [];
        let sessionPhrasalVerbsCompletionIndex = 0;
        let phrasalVerbsCompletionAnswered = false;
        let phrasalVerbsCompletionScore = { correct: 0, incorrect: 0 };
        let sessionPhrasalVerbsCompletionAnswers = {};

        let sessionIdiomsChallenge = [];
        let sessionIdiomsChallengeIndex = 0;
        let idiomsChallengeAnswered = false;
        let idiomsChallengeScore = { correct: 0, incorrect: 0 };
        let sessionIdiomsChallengeAnswers = {};

        let sessionUsedTo = [];
        let sessionUsedToIndex = 0;
        let usedToAnswered = false;
        let usedToScore = { correct: 0, incorrect: 0 };
        let sessionUsedToAnswers = {};

        // --- NAVIGATION LOGIC ---
        function showScreen(screenId) {
            const screens = [homeScreen, newWordsSection, completePhraseSection, phrasalVerbsSection, idiomsSection, completePhrasalVerbsSection, idiomsChallengeSection, usedToSection];
            screens.forEach(screen => {
                if (screen.id === screenId) {
                    screen.classList.remove('hidden');
                    if(screen.id !== 'home-screen') screen.classList.add('flex');
                } else {
                    screen.classList.add('hidden');
                    screen.classList.remove('flex');
                }
            });
        }

        startNewWordsBtn.addEventListener('click', () => {
            showScreen('new-words-section');
            setupCategories();
            startNewWordSession();
        });

        startCompletePhraseBtn.addEventListener('click', () => {
            showScreen('complete-phrase-section');
            startNewPhraseSession();
        });

        startPhrasalVerbsBtn.addEventListener('click', () => {
            showScreen('phrasal-verbs-section');
            setupPhrasalVerbCategories();
            startNewPhrasalVerbSession();
        });

        startIdiomsBtn.addEventListener('click', () => {
            showScreen('idioms-section');
            setupIdiomCategories();
            startNewIdiomSession();
        });

        startPhrasalVerbsCompletionBtn.addEventListener('click', () => {
            showScreen('complete-phrasal-verbs-section');
            startNewPhrasalVerbsCompletionSession();
        });

        startIdiomsChallengeBtn.addEventListener('click', () => {
            showScreen('idioms-challenge-section');
            startNewIdiomsChallengeSession();
        });

        startUsedToBtn.addEventListener('click', () => {
            showScreen('used-to-section');
            startNewUsedToSession();
        });

        startBeVsGoBtn.addEventListener('click', () => {
            window.location.href = 'submodulos/compare.html';
        });

        backToHomeBtns.forEach(btn => {
            btn.addEventListener('click', () => showScreen('home-screen'));
        });

        // --- UTILITY ---
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // --- NEW WORDS LOGIC ---
        function setupCategories() {
            if (categorySelect.options.length > 1) return;
            categorySelect.innerHTML = '';
            const allOption = document.createElement('option');
            allOption.value = 'All';
            allOption.textContent = 'All Categories';
            categorySelect.appendChild(allOption);
            for (const category in ieltsVocabulary) {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            }
        }
        
        function startNewWordSession() {
            const selectedCategory = categorySelect.value;
            let wordPool = (selectedCategory === 'All' || !selectedCategory) ? Object.values(ieltsVocabulary).flat() : ieltsVocabulary[selectedCategory];
            sessionWords = shuffleArray([...wordPool]);
            sessionIndex = 0;
            displayCurrentWord();
        }

        function displayCurrentWord() {
            if (sessionIndex >= sessionWords.length) {
                wordCardContent.classList.add('hidden');
                wordCompletionContainer.classList.remove('hidden');
                wordCounterEl.textContent = `Completado: ${sessionWords.length}/${sessionWords.length}`;
                revealBtn.disabled = true;
            } else {
                wordCardContent.classList.remove('hidden');
                wordCompletionContainer.classList.add('hidden');
                revealBtn.disabled = false;
                const currentWord = sessionWords[sessionIndex];
                englishWordEl.textContent = currentWord.en;
                ipaPronunciationEl.textContent = currentWord.ipa;
                exampleSentenceEl.textContent = `"${currentWord.example}"`;
                spanishWordEl.textContent = currentWord.es;
                exampleSentenceEsEl.textContent = `"${currentWord.example_es}"`;
                wordCounterEl.textContent = `${sessionIndex + 1} / ${sessionWords.length}`;
                translationContainer.classList.remove('show');
            }
        }

        function advanceWord() {
            sessionIndex++;
            displayCurrentWord();
        }

        function undoWord() {
            if (sessionIndex > 0) {
                sessionIndex--;
                displayCurrentWord();
            }
        }

        function handleWordCardTransition() {
            if (sessionIndex >= sessionWords.length) {
                startNewWordSession();
                return;
            }
            const isTranslationShown = translationContainer.classList.contains('show');
            if (isTranslationShown) {
                advanceWord();
            } else {
                translationContainer.classList.toggle('show');
            }
        }

        categorySelect.addEventListener('change', startNewWordSession);
        wordCard.addEventListener('click', handleWordCardTransition);
        revealBtn.addEventListener('click', () => { if (sessionIndex < sessionWords.length) translationContainer.classList.toggle('show'); });
        newWordBtn.addEventListener('click', () => { (sessionIndex >= sessionWords.length) ? startNewWordSession() : advanceWord(); });
        undoWordBtn.addEventListener('click', undoWord);

        // --- COMPLETE THE PHRASE LOGIC ---
        function startNewPhraseSession() {
            sessionPhrases = shuffleArray([...phrases]);
            sessionPhraseIndex = 0;
            console.log("Loaded phrases:", sessionPhrases);
            phraseScore = { correct: 0, incorrect: 0 };
            sessionAnswers = {};
            updatePhraseScoreDisplay();
            displayCurrentPhrase(false);
        }
        
        function updatePhraseScoreDisplay() {
            phraseScoreCounterEl.innerHTML = `<span class="text-green-500">C: ${phraseScore.correct}</span> &nbsp;&nbsp; <span class="text-red-500">I: ${phraseScore.incorrect}</span>`;
        }

        function displayCurrentPhrase(isReviewing) {
            backPhraseBtn.disabled = sessionPhraseIndex === 0;

            if (sessionPhraseIndex >= sessionPhrases.length) {
                phraseCardContent.classList.add('hidden');
                phraseCompletionContainer.classList.remove('hidden');
                phraseCounterEl.textContent = `Completado: ${sessionPhrases.length}/${sessionPhrases.length}`;
                finalScoreTextEl.innerHTML = `Resultado: <span class="text-green-500">${phraseScore.correct} Correctas</span>, <span class="text-red-500">${phraseScore.incorrect} Incorrectas</span>`;
            } else {
                phraseCardContent.classList.remove('hidden');
                phraseCompletionContainer.classList.add('hidden');
                phraseAnswered = false;
                phraseCard.style.cursor = 'default';
                const currentPhraseData = sessionPhrases[sessionPhraseIndex];
                //console.log(currentPhraseData);
                phraseTextEl.innerHTML = currentPhraseData.sentence.replace('___', '<span class="font-bold text-teal-500">___</span>');
                optionsContainerEl.innerHTML = '';
                feedbackMessageEl.textContent = '';
                explanationContainerEl.classList.add('opacity-0');
                explanationContainerEl.classList.remove('opacity-100');
                optionButtons = [];
                const options = isReviewing && currentPhraseData.shuffledOptions ? currentPhraseData.shuffledOptions : shuffleArray([...currentPhraseData.options]);
                currentPhraseData.shuffledOptions = options; // Save the shuffled order for review
                
                options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.dataset.option = option;
                    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                    button.classList.add('option-btn', 'w-full', 'bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-800', 'dark:text-gray-200', 'font-semibold', 'py-3', 'px-4', 'rounded-lg', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', 'transition-all', 'duration-200');
                    button.addEventListener('click', handleOptionClick);
                    optionsContainerEl.appendChild(button);
                    optionButtons.push(button);
                });
                phraseCounterEl.textContent = `${sessionPhraseIndex + 1} / ${sessionPhrases.length}`;

                if (isReviewing) {
                    showPreviousAnswer();
                }
            }
        }
        
        function showPreviousAnswer() {
            const previousAnswer = sessionAnswers[sessionPhraseIndex];
            if (!previousAnswer) return;

            const currentPhraseData = sessionPhrases[sessionPhraseIndex];
            phraseAnswered = true;
            phraseCard.style.cursor = 'pointer';

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentPhraseData.correct) {
                    btn.classList.add('correct');
                }
                if (btn.dataset.option === previousAnswer.answer && previousAnswer.answer !== currentPhraseData.correct) {
                    btn.classList.add('incorrect');
                }
            });

            if (previousAnswer.isCorrect) {
                feedbackMessageEl.textContent = '¡Correcto!';
                feedbackMessageEl.style.color = '#22c55e';
                 if (currentPhraseData.explanation) {
                    explanationTextEl.textContent = currentPhraseData.explanation;
                    explanationContainerEl.classList.remove('opacity-0');
                    explanationContainerEl.classList.add('opacity-100');
                }
            } else {
                feedbackMessageEl.textContent = 'Inténtalo de nuevo';
                feedbackMessageEl.style.color = '#ef4444';
                explanationTextEl.textContent = currentPhraseData.explanation;
                explanationContainerEl.classList.remove('opacity-0');
                explanationContainerEl.classList.add('opacity-100');
            }
        }

        function advancePhrase() {
            sessionPhraseIndex++;
            displayCurrentPhrase(false);
        }

        function goBackPhrase() {
            if (sessionPhraseIndex > 0) {
                sessionPhraseIndex--;
                displayCurrentPhrase(true);
            }
        }

        function undoPhrase() {
            if (phraseAnswered) {
                const currentPhraseData = sessionPhrases[sessionPhraseIndex];
                const previousAnswer = sessionAnswers[sessionPhraseIndex];
                if (previousAnswer && !previousAnswer.isCorrect) {
                    phraseScore.incorrect--;
                }
                delete sessionAnswers[sessionPhraseIndex];
                displayCurrentPhrase(false);
                updatePhraseScoreDisplay();
            }
        }

        function handleOptionClick(event) {
            event.stopPropagation();
            if (phraseAnswered) return;
            phraseAnswered = true;
            phraseCard.style.cursor = 'pointer';
            
            const currentPhraseData = sessionPhrases[sessionPhraseIndex];
            const selectedButton = event.currentTarget;
            const selectedAnswer = selectedButton.dataset.option;
            
            const isCorrect = selectedAnswer === currentPhraseData.correct;
            sessionAnswers[sessionPhraseIndex] = { answer: selectedAnswer, isCorrect: isCorrect };

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentPhraseData.correct) {
                    btn.classList.add('correct');
                }
            });

            if (isCorrect) {
                feedbackMessageEl.textContent = '¡Correcto!';
                feedbackMessageEl.style.color = '#22c55e';
                phraseScore.correct++;
            } else {
                feedbackMessageEl.textContent = 'Inténtalo de nuevo';
                feedbackMessageEl.style.color = '#ef4444';
                selectedButton.classList.add('incorrect');
                phraseScore.incorrect++;
            }

            if (currentPhraseData.explanation) {
                explanationTextEl.textContent = currentPhraseData.explanation;
                explanationContainerEl.classList.remove('opacity-0');
                explanationContainerEl.classList.add('opacity-100');
            }

            updatePhraseScoreDisplay();
        }

        function handlePhraseCardTransition() {
            if (sessionPhraseIndex >= sessionPhrases.length) {
                startNewPhraseSession();
            } else if (phraseAnswered) {
                advancePhrase();
            }
        }

        phraseCard.addEventListener('click', handlePhraseCardTransition);
        nextPhraseBtn.addEventListener('click', handlePhraseCardTransition);
        backPhraseBtn.addEventListener('click', goBackPhrase);
        undoPhraseBtn.addEventListener('click', undoPhrase);

        // --- PHRASAL VERBS LOGIC ---
        function setupPhrasalVerbCategories() {
            if (phrasalVerbCategorySelect.options.length > 1) return;
            phrasalVerbCategorySelect.innerHTML = '';
            const allOption = document.createElement('option');
            allOption.value = 'All';
            allOption.textContent = 'All Categories';
            phrasalVerbCategorySelect.appendChild(allOption);
            for (const category in phrasalVerbs) {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                phrasalVerbCategorySelect.appendChild(option);
            }
        }

        function startNewPhrasalVerbSession() {
            const selectedCategory = phrasalVerbCategorySelect.value;
            let phrasalVerbPool = (selectedCategory === 'All' || !selectedCategory) ? Object.values(phrasalVerbs).flat() : phrasalVerbs[selectedCategory];
            sessionPhrasalVerbs = shuffleArray([...phrasalVerbPool]);
            sessionPhrasalVerbIndex = 0;
            displayCurrentPhrasalVerb();
        }

        function displayCurrentPhrasalVerb() {
            if (sessionPhrasalVerbIndex >= sessionPhrasalVerbs.length) {
                phrasalVerbCardContent.classList.add('hidden');
                phrasalVerbCompletionContainer.classList.remove('hidden');
                phrasalVerbCounterEl.textContent = `Completado: ${sessionPhrasalVerbs.length}/${sessionPhrasalVerbs.length}`;
                phrasalVerbRevealBtn.disabled = true;
            } else {
                phrasalVerbCardContent.classList.remove('hidden');
                phrasalVerbCompletionContainer.classList.add('hidden');
                phrasalVerbRevealBtn.disabled = false;
                const currentPhrasalVerb = sessionPhrasalVerbs[sessionPhrasalVerbIndex];
                phrasalVerbEnglishEl.textContent = currentPhrasalVerb.en;
                phrasalVerbExampleSentenceEl.textContent = `"${currentPhrasalVerb.example}"`;
                phrasalVerbSpanishEl.textContent = currentPhrasalVerb.es;
                phrasalVerbExampleSentenceEsEl.textContent = `"${currentPhrasalVerb.example_es}"`;
                phrasalVerbCounterEl.textContent = `${sessionPhrasalVerbIndex + 1} / ${sessionPhrasalVerbs.length}`;
                phrasalVerbTranslationContainer.classList.remove('show');
            }
        }

        function advancePhrasalVerb() {
            sessionPhrasalVerbIndex++;
            displayCurrentPhrasalVerb();
        }

        function undoPhrasalVerb() {
            if (sessionPhrasalVerbIndex > 0) {
                sessionPhrasalVerbIndex--;
                displayCurrentPhrasalVerb();
            }
        }

        function handlePhrasalVerbCardTransition() {
            if (sessionPhrasalVerbIndex >= sessionPhrasalVerbs.length) {
                startNewPhrasalVerbSession();
                return;
            }
            const isTranslationShown = phrasalVerbTranslationContainer.classList.contains('show');
            if (isTranslationShown) {
                advancePhrasalVerb();
            } else {
                phrasalVerbTranslationContainer.classList.toggle('show');
            }
        }

        phrasalVerbCard.addEventListener('click', handlePhrasalVerbCardTransition);
        phrasalVerbRevealBtn.addEventListener('click', () => { if (sessionPhrasalVerbIndex < sessionPhrasalVerbs.length) phrasalVerbTranslationContainer.classList.toggle('show'); });
        newPhrasalVerbBtn.addEventListener('click', () => { (sessionPhrasalVerbIndex >= sessionPhrasalVerbs.length) ? startNewPhrasalVerbSession() : advancePhrasalVerb(); });
        undoPhrasalVerbBtn.addEventListener('click', undoPhrasalVerb);
        phrasalVerbCategorySelect.addEventListener('change', startNewPhrasalVerbSession);

        // --- IDIOMS LOGIC ---
        function startNewIdiomSession() {
            sessionIdioms = shuffleArray([...idioms]);
            sessionIdiomIndex = 0;
            displayCurrentIdiom();
        }

        function displayCurrentIdiom() {
            if (sessionIdiomIndex >= sessionIdioms.length) {
                idiomCardContent.classList.add('hidden');
                idiomCompletionContainer.classList.remove('hidden');
                idiomCounterEl.textContent = `Completado: ${sessionIdioms.length}/${sessionIdioms.length}`;
                idiomRevealBtn.disabled = true;
            } else {
                idiomCardContent.classList.remove('hidden');
                idiomCompletionContainer.classList.add('hidden');
                idiomRevealBtn.disabled = false;
                const currentIdiom = sessionIdioms[sessionIdiomIndex];
                idiomEnglishEl.textContent = currentIdiom.en;
                idiomExampleSentenceEl.textContent = `"${currentIdiom.example}"`;
                idiomSpanishEl.textContent = currentIdiom.es;
                idiomExampleSentenceEsEl.textContent = `"${currentIdiom.example_es}"`;
                idiomCounterEl.textContent = `${sessionIdiomIndex + 1} / ${sessionIdioms.length}`;
                idiomTranslationContainer.classList.remove('show');
            }
        }

        function advanceIdiom() {
            sessionIdiomIndex++;
            displayCurrentIdiom();
        }

        function undoIdiom() {
            if (sessionIdiomIndex > 0) {
                sessionIdiomIndex--;
                displayCurrentIdiom();
            }
        }

        function handleIdiomCardTransition() {
            if (sessionIdiomIndex >= sessionIdioms.length) {
                startNewIdiomSession();
                return;
            }
            const isTranslationShown = idiomTranslationContainer.classList.contains('show');
            if (isTranslationShown) {
                advanceIdiom();
            } else {
                idiomTranslationContainer.classList.toggle('show');
            }
        }

        idiomCard.addEventListener('click', handleIdiomCardTransition);
        idiomRevealBtn.addEventListener('click', () => { if (sessionIdiomIndex < sessionIdioms.length) idiomTranslationContainer.classList.toggle('show'); });
        newIdiomBtn.addEventListener('click', () => { (sessionIdiomIndex >= sessionIdioms.length) ? startNewIdiomSession() : advanceIdiom(); });
        undoIdiomBtn.addEventListener('click', undoIdiom);

        phrasalVerbCategorySelect.addEventListener('change', startNewPhrasalVerbSession);

        // --- IDIOMS LOGIC ---
        function setupIdiomCategories() {
            if (idiomCategorySelect.options.length > 1) return;
            idiomCategorySelect.innerHTML = '';
            const allOption = document.createElement('option');
            allOption.value = 'All';
            allOption.textContent = 'All Categories';
            idiomCategorySelect.appendChild(allOption);
            for (const category in idioms) {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                idiomCategorySelect.appendChild(option);
            }
        }

        function startNewIdiomSession() {
            const selectedCategory = idiomCategorySelect.value;
            let idiomPool = (selectedCategory === 'All' || !selectedCategory) ? Object.values(idioms).flat() : idioms[selectedCategory];
            sessionIdioms = shuffleArray([...idiomPool]);
            sessionIdiomIndex = 0;
            displayCurrentIdiom();
        }

        function displayCurrentIdiom() {
            if (sessionIdiomIndex >= sessionIdioms.length) {
                idiomCardContent.classList.add('hidden');
                idiomCompletionContainer.classList.remove('hidden');
                idiomCounterEl.textContent = `Completado: ${sessionIdioms.length}/${sessionIdioms.length}`;
                idiomRevealBtn.disabled = true;
            } else {
                idiomCardContent.classList.remove('hidden');
                idiomCompletionContainer.classList.add('hidden');
                idiomRevealBtn.disabled = false;
                const currentIdiom = sessionIdioms[sessionIdiomIndex];
                idiomEnglishEl.textContent = currentIdiom.en;
                idiomExampleSentenceEl.textContent = `"${currentIdiom.example}"`;
                idiomSpanishEl.textContent = currentIdiom.es;
                idiomExampleSentenceEsEl.textContent = `"${currentIdiom.example_es}"`;
                idiomCounterEl.textContent = `${sessionIdiomIndex + 1} / ${sessionIdioms.length}`;
                idiomTranslationContainer.classList.remove('show');
            }
        }

        function advanceIdiom() {
            sessionIdiomIndex++;
            displayCurrentIdiom();
        }

        function undoIdiom() {
            if (sessionIdiomIndex > 0) {
                sessionIdiomIndex--;
                displayCurrentIdiom();
            }
        }

        function handleIdiomCardTransition() {
            if (sessionIdiomIndex >= sessionIdioms.length) {
                startNewIdiomSession();
                return;
            }
            const isTranslationShown = idiomTranslationContainer.classList.contains('show');
            if (isTranslationShown) {
                advanceIdiom();
            } else {
                idiomTranslationContainer.classList.toggle('show');
            }
        }

        idiomCard.addEventListener('click', handleIdiomCardTransition);
        idiomRevealBtn.addEventListener('click', () => { if (sessionIdiomIndex < sessionIdioms.length) idiomTranslationContainer.classList.toggle('show'); });
        newIdiomBtn.addEventListener('click', () => { (sessionIdiomIndex >= sessionIdioms.length) ? startNewIdiomSession() : advanceIdiom(); });
        undoIdiomBtn.addEventListener('click', undoIdiom);
        idiomCategorySelect.addEventListener('change', startNewIdiomSession);

        // --- COMPLETE PHRASAL VERBS LOGIC ---
        function startNewPhrasalVerbsCompletionSession() {
            sessionPhrasalVerbsCompletion = shuffleArray([...phrasalVerbsCompletion]);
            sessionPhrasalVerbsCompletionIndex = 0;
            phrasalVerbsCompletionScore = { correct: 0, incorrect: 0 };
            sessionPhrasalVerbsCompletionAnswers = {};
            updatePhrasalVerbsCompletionScoreDisplay();
            displayCurrentPhrasalVerbsCompletion(false);
        }

        function updatePhrasalVerbsCompletionScoreDisplay() {
            phrasalVerbsCompletionScoreCounterEl.innerHTML = `<span class="text-green-500">C: ${phrasalVerbsCompletionScore.correct}</span> &nbsp;&nbsp; <span class="text-red-500">I: ${phrasalVerbsCompletionScore.incorrect}</span>`;
        }

        function displayCurrentPhrasalVerbsCompletion(isReviewing) {
            backPhrasalVerbsCompletionBtn.disabled = sessionPhrasalVerbsCompletionIndex === 0;

            if (sessionPhrasalVerbsCompletionIndex >= sessionPhrasalVerbsCompletion.length) {
                phrasalVerbsCompletionCardContent.classList.add('hidden');
                phrasalVerbsCompletionCompletionContainer.classList.remove('hidden');
                phrasalVerbsCompletionCounterEl.textContent = `Completado: ${sessionPhrasalVerbsCompletion.length}/${sessionPhrasalVerbsCompletion.length}`;
                phrasalVerbsCompletionFinalScoreTextEl.innerHTML = `Resultado: <span class="text-green-500">${phrasalVerbsCompletionScore.correct} Correctas</span>, <span class="text-red-500">${phrasalVerbsCompletionScore.incorrect} Incorrectas</span>`;
            } else {
                phrasalVerbsCompletionCardContent.classList.remove('hidden');
                phrasalVerbsCompletionCompletionContainer.classList.add('hidden');
                phrasalVerbsCompletionAnswered = false;
                phrasalVerbsCompletionCard.style.cursor = 'default';
                const currentPhraseData = sessionPhrasalVerbsCompletion[sessionPhrasalVerbsCompletionIndex];
                phrasalVerbsCompletionTextEl.innerHTML = currentPhraseData.sentence.replace('___', '<span class="font-bold text-rose-500">___</span>');
                phrasalVerbsCompletionOptionsContainerEl.innerHTML = '';
                phrasalVerbsCompletionFeedbackMessageEl.textContent = '';
                phrasalVerbsCompletionExplanationContainerEl.classList.add('opacity-0');
                phrasalVerbsCompletionExplanationContainerEl.classList.remove('opacity-100');
                optionButtons = [];
                const options = isReviewing && currentPhraseData.shuffledOptions ? currentPhraseData.shuffledOptions : shuffleArray([...currentPhraseData.options]);
                currentPhraseData.shuffledOptions = options; // Save the shuffled order for review
                
                options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.dataset.option = option;
                    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                    button.classList.add('option-btn', 'w-full', 'bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-800', 'dark:text-gray-200', 'font-semibold', 'py-3', 'px-4', 'rounded-lg', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', 'transition-all', 'duration-200');
                    button.addEventListener('click', handlePhrasalVerbsCompletionOptionClick);
                    phrasalVerbsCompletionOptionsContainerEl.appendChild(button);
                    optionButtons.push(button);
                });
                phrasalVerbsCompletionCounterEl.textContent = `${sessionPhrasalVerbsCompletionIndex + 1} / ${sessionPhrasalVerbsCompletion.length}`;

                if (isReviewing) {
                    showPreviousPhrasalVerbsCompletionAnswer();
                }
            }
        }

        function showPreviousPhrasalVerbsCompletionAnswer() {
            const previousAnswer = sessionPhrasalVerbsCompletionAnswers[sessionPhrasalVerbsCompletionIndex];
            if (!previousAnswer) return;

            const currentPhraseData = sessionPhrasalVerbsCompletion[sessionPhrasalVerbsCompletionIndex];
            phrasalVerbsCompletionAnswered = true;
            phrasalVerbsCompletionCard.style.cursor = 'pointer';

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentPhraseData.correct) {
                    btn.classList.add('correct');
                }
                if (btn.dataset.option === previousAnswer.answer && previousAnswer.answer !== currentPhraseData.correct) {
                    btn.classList.add('incorrect');
                }
            });

            if (previousAnswer.isCorrect) {
                phrasalVerbsCompletionFeedbackMessageEl.textContent = '¡Correcto!';
                phrasalVerbsCompletionFeedbackMessageEl.style.color = '#22c55e';
                 if (currentPhraseData.explanation) {
                    phrasalVerbsCompletionExplanationTextEl.textContent = currentPhraseData.explanation;
                    phrasalVerbsCompletionExplanationContainerEl.classList.remove('opacity-0');
                    phrasalVerbsCompletionExplanationContainerEl.classList.add('opacity-100');
                }
            } else {
                phrasalVerbsCompletionFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                phrasalVerbsCompletionFeedbackMessageEl.style.color = '#ef4444';
                phrasalVerbsCompletionExplanationTextEl.textContent = currentPhraseData.explanation;
                phrasalVerbsCompletionExplanationContainerEl.classList.remove('opacity-0');
                phrasalVerbsCompletionExplanationContainerEl.classList.add('opacity-100');
            }
        }

        function advancePhrasalVerbsCompletion() {
            sessionPhrasalVerbsCompletionIndex++;
            displayCurrentPhrasalVerbsCompletion(false);
        }

        function goBackPhrasalVerbsCompletion() {
            if (sessionPhrasalVerbsCompletionIndex > 0) {
                sessionPhrasalVerbsCompletionIndex--;
                displayCurrentPhrasalVerbsCompletion(true);
            }
        }

        function undoPhrasalVerbsCompletion() {
            if (phrasalVerbsCompletionAnswered) {
                const currentPhraseData = sessionPhrasalVerbsCompletion[sessionPhrasalVerbsCompletionIndex];
                const previousAnswer = sessionPhrasalVerbsCompletionAnswers[sessionPhrasalVerbsCompletionIndex];
                if (previousAnswer && !previousAnswer.isCorrect) {
                    phrasalVerbsCompletionScore.incorrect--;
                }
                delete sessionPhrasalVerbsCompletionAnswers[sessionPhrasalVerbsCompletionIndex];
                displayCurrentPhrasalVerbsCompletion(false);
                updatePhrasalVerbsCompletionScoreDisplay();
            }
        }

        function handlePhrasalVerbsCompletionOptionClick(event) {
            event.stopPropagation();
            if (phrasalVerbsCompletionAnswered) return;
            phrasalVerbsCompletionAnswered = true;
            phrasalVerbsCompletionCard.style.cursor = 'pointer';
            
            const currentPhraseData = sessionPhrasalVerbsCompletion[sessionPhrasalVerbsCompletionIndex];
            const selectedButton = event.currentTarget;
            const selectedAnswer = selectedButton.dataset.option;
            
            const isCorrect = selectedAnswer === currentPhraseData.correct;
            sessionPhrasalVerbsCompletionAnswers[sessionPhrasalVerbsCompletionIndex] = { answer: selectedAnswer, isCorrect: isCorrect };

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentPhraseData.correct) {
                    btn.classList.add('correct');
                }
            });

            if (isCorrect) {
                phrasalVerbsCompletionFeedbackMessageEl.textContent = '¡Correcto!';
                phrasalVerbsCompletionFeedbackMessageEl.style.color = '#22c55e';
                phrasalVerbsCompletionScore.correct++;
            } else {
                phrasalVerbsCompletionFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                phrasalVerbsCompletionFeedbackMessageEl.style.color = '#ef4444';
                selectedButton.classList.add('incorrect');
                phrasalVerbsCompletionScore.incorrect++;
            }

            if (currentPhraseData.explanation) {
                phrasalVerbsCompletionExplanationTextEl.textContent = currentPhraseData.explanation;
                phrasalVerbsCompletionExplanationContainerEl.classList.remove('opacity-0');
                phrasalVerbsCompletionExplanationContainerEl.classList.add('opacity-100');
            }

            updatePhrasalVerbsCompletionScoreDisplay();
        }

        function handlePhrasalVerbsCompletionCardTransition() {
            if (sessionPhrasalVerbsCompletionIndex >= sessionPhrasalVerbsCompletion.length) {
                startNewPhrasalVerbsCompletionSession();
            } else if (phrasalVerbsCompletionAnswered) {
                advancePhrasalVerbsCompletion();
            }
        }

        phrasalVerbsCompletionCard.addEventListener('click', handlePhrasalVerbsCompletionCardTransition);
        nextPhrasalVerbsCompletionBtn.addEventListener('click', handlePhrasalVerbsCompletionCardTransition);
        backPhrasalVerbsCompletionBtn.addEventListener('click', goBackPhrasalVerbsCompletion);
        undoPhrasalVerbsCompletionBtn.addEventListener('click', undoPhrasalVerbsCompletion);

        // --- IDIOMS CHALLENGE LOGIC ---
        function startNewIdiomsChallengeSession() {
            sessionIdiomsChallenge = shuffleArray([...idiomsChallenge]);
            sessionIdiomsChallengeIndex = 0;
            idiomsChallengeScore = { correct: 0, incorrect: 0 };
            sessionIdiomsChallengeAnswers = {};
            updateIdiomsChallengeScoreDisplay();
            displayCurrentIdiomsChallenge(false);
        }

        function updateIdiomsChallengeScoreDisplay() {
            idiomsChallengeScoreCounterEl.innerHTML = `<span class="text-green-500">C: ${idiomsChallengeScore.correct}</span> &nbsp;&nbsp; <span class="text-red-500">I: ${idiomsChallengeScore.incorrect}</span>`;
        }

        function displayCurrentIdiomsChallenge(isReviewing) {
            backIdiomChallengeBtn.disabled = sessionIdiomsChallengeIndex === 0;

            if (sessionIdiomsChallengeIndex >= sessionIdiomsChallenge.length) {
                idiomsChallengeCardContent.classList.add('hidden');
                idiomsChallengeCompletionContainer.classList.remove('hidden');
                idiomsChallengeCounterEl.textContent = `Completado: ${sessionIdiomsChallenge.length}/${sessionIdiomsChallenge.length}`;
                idiomsChallengeFinalScoreTextEl.innerHTML = `Resultado: <span class="text-green-500">${idiomsChallengeScore.correct} Correctas</span>, <span class="text-red-500">${idiomsChallengeScore.incorrect} Incorrectas</span>`;
            } else {
                idiomsChallengeCardContent.classList.remove('hidden');
                idiomsChallengeCompletionContainer.classList.add('hidden');
                idiomsChallengeAnswered = false;
                idiomsChallengeCard.style.cursor = 'default';
                const currentIdiomData = sessionIdiomsChallenge[sessionIdiomsChallengeIndex];
                idiomChallengeTextEl.innerHTML = currentIdiomData.sentence.replace('___', '<span class="font-bold text-yellow-500">___</span>');
                idiomChallengeOptionsContainerEl.innerHTML = '';
                idiomChallengeFeedbackMessageEl.textContent = '';
                idiomChallengeExplanationContainerEl.classList.add('opacity-0');
                idiomChallengeExplanationContainerEl.classList.remove('opacity-100');
                optionButtons = [];
                const options = isReviewing && currentIdiomData.shuffledOptions ? currentIdiomData.shuffledOptions : shuffleArray([...currentIdiomData.options]);
                currentIdiomData.shuffledOptions = options; // Save the shuffled order for review
                
                options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.dataset.option = option;
                    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                    button.classList.add('option-btn', 'w-full', 'bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-800', 'dark:text-gray-200', 'font-semibold', 'py-3', 'px-4', 'rounded-lg', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', 'transition-all', 'duration-200');
                    button.addEventListener('click', handleIdiomsChallengeOptionClick);
                    idiomChallengeOptionsContainerEl.appendChild(button);
                    optionButtons.push(button);
                });
                idiomsChallengeCounterEl.textContent = `${sessionIdiomsChallengeIndex + 1} / ${sessionIdiomsChallenge.length}`;

                if (isReviewing) {
                    showPreviousIdiomsChallengeAnswer();
                }
            }
        }

        function showPreviousIdiomsChallengeAnswer() {
            const previousAnswer = sessionIdiomsChallengeAnswers[sessionIdiomsChallengeIndex];
            if (!previousAnswer) return;

            const currentIdiomData = sessionIdiomsChallenge[sessionIdiomsChallengeIndex];
            idiomsChallengeAnswered = true;
            idiomsChallengeCard.style.cursor = 'pointer';

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentIdiomData.correct) {
                    btn.classList.add('correct');
                }
                if (btn.dataset.option === previousAnswer.answer && previousAnswer.answer !== currentIdiomData.correct) {
                    btn.classList.add('incorrect');
                }
            });

            if (previousAnswer.isCorrect) {
                idiomChallengeFeedbackMessageEl.textContent = '¡Correcto!';
                idiomChallengeFeedbackMessageEl.style.color = '#22c55e';
                 if (currentIdiomData.explanation) {
                    idiomChallengeExplanationTextEl.textContent = currentIdiomData.explanation;
                    idiomChallengeExplanationContainerEl.classList.remove('opacity-0');
                    idiomChallengeExplanationContainerEl.classList.add('opacity-100');
                }
            } else {
                idiomChallengeFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                idiomChallengeFeedbackMessageEl.style.color = '#ef4444';
                idiomChallengeExplanationTextEl.textContent = currentIdiomData.explanation;
                idiomChallengeExplanationContainerEl.classList.remove('opacity-0');
                idiomChallengeExplanationContainerEl.classList.add('opacity-100');
            }
        }

        function advanceIdiomsChallenge() {
            sessionIdiomsChallengeIndex++;
            displayCurrentIdiomsChallenge(false);
        }

        function goBackIdiomsChallenge() {
            if (sessionIdiomsChallengeIndex > 0) {
                sessionIdiomsChallengeIndex--;
                displayCurrentIdiomsChallenge(true);
            }
        }

        function undoIdiomsChallenge() {
            if (idiomsChallengeAnswered) {
                const currentIdiomData = sessionIdiomsChallenge[sessionIdiomsChallengeIndex];
                const previousAnswer = sessionIdiomsChallengeAnswers[sessionIdiomsChallengeIndex];
                if (previousAnswer && !previousAnswer.isCorrect) {
                    idiomsChallengeScore.incorrect--;
                }
                delete sessionIdiomsChallengeAnswers[sessionIdiomsChallengeIndex];
                displayCurrentIdiomsChallenge(false);
                updateIdiomsChallengeScoreDisplay();
            }
        }

        function handleIdiomsChallengeOptionClick(event) {
            event.stopPropagation();
            if (idiomsChallengeAnswered) return;
            idiomsChallengeAnswered = true;
            idiomsChallengeCard.style.cursor = 'pointer';
            
            const currentIdiomData = sessionIdiomsChallenge[sessionIdiomsChallengeIndex];
            const selectedButton = event.currentTarget;
            const selectedAnswer = selectedButton.dataset.option;
            
            const isCorrect = selectedAnswer === currentIdiomData.correct;
            sessionIdiomsChallengeAnswers[sessionIdiomsChallengeIndex] = { answer: selectedAnswer, isCorrect: isCorrect };

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentIdiomData.correct) {
                    btn.classList.add('correct');
                }
            });

            if (isCorrect) {
                idiomChallengeFeedbackMessageEl.textContent = '¡Correcto!';
                idiomChallengeFeedbackMessageEl.style.color = '#22c55e';
                idiomsChallengeScore.correct++;
            } else {
                idiomChallengeFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                idiomChallengeFeedbackMessageEl.style.color = '#ef4444';
                selectedButton.classList.add('incorrect');
                idiomsChallengeScore.incorrect++;
            }

            if (currentIdiomData.explanation) {
                idiomChallengeExplanationTextEl.textContent = currentIdiomData.explanation;
                idiomChallengeExplanationContainerEl.classList.remove('opacity-0');
                idiomChallengeExplanationContainerEl.classList.add('opacity-100');
            }

            updateIdiomsChallengeScoreDisplay();
        }

        function handleIdiomsChallengeCardTransition() {
            if (sessionIdiomsChallengeIndex >= sessionIdiomsChallenge.length) {
                startNewIdiomsChallengeSession();
            } else if (idiomsChallengeAnswered) {
                advanceIdiomsChallenge();
            }
        }

        idiomsChallengeCard.addEventListener('click', handleIdiomsChallengeCardTransition);
        nextIdiomChallengeBtn.addEventListener('click', handleIdiomsChallengeCardTransition);
        backIdiomChallengeBtn.addEventListener('click', goBackIdiomsChallenge);
        undoIdiomChallengeBtn.addEventListener('click', undoIdiomsChallenge);

        // --- USED TO LOGIC ---
        function startNewUsedToSession() {
            sessionUsedTo = shuffleArray([...usedTo]);
            sessionUsedToIndex = 0;
            usedToScore = { correct: 0, incorrect: 0 };
            sessionUsedToAnswers = {};
            updateUsedToScoreDisplay();
            displayCurrentUsedTo(false);
        }

        function updateUsedToScoreDisplay() {
            usedToScoreCounterEl.innerHTML = `<span class="text-green-500">C: ${usedToScore.correct}</span> &nbsp;&nbsp; <span class="text-red-500">I: ${usedToScore.incorrect}</span>`;
        }

        function displayCurrentUsedTo(isReviewing) {
            backUsedToBtn.disabled = sessionUsedToIndex === 0;

            if (sessionUsedToIndex >= sessionUsedTo.length) {
                usedToCardContent.classList.add('hidden');
                usedToCompletionContainer.classList.remove('hidden');
                usedToCounterEl.textContent = `Completado: ${sessionUsedTo.length}/${sessionUsedTo.length}`;
                usedToFinalScoreTextEl.innerHTML = `Resultado: <span class="text-green-500">${usedToScore.correct} Correctas</span>, <span class="text-red-500">${usedToScore.incorrect} Incorrectas</span>`;
            } else {
                usedToCardContent.classList.remove('hidden');
                usedToCompletionContainer.classList.add('hidden');
                usedToAnswered = false;
                usedToCard.style.cursor = 'default';
                const currentUsedToData = sessionUsedTo[sessionUsedToIndex];
                usedToTextEl.innerHTML = currentUsedToData.sentence.replace('___', '<span class="font-bold text-green-500">___</span>');
                usedToOptionsContainerEl.innerHTML = '';
                usedToFeedbackMessageEl.textContent = '';
                usedToExplanationContainerEl.classList.add('opacity-0');
                usedToExplanationContainerEl.classList.remove('opacity-100');
                optionButtons = [];
                const options = isReviewing && currentUsedToData.shuffledOptions ? currentUsedToData.shuffledOptions : shuffleArray([...currentUsedToData.options]);
                currentUsedToData.shuffledOptions = options; // Save the shuffled order for review
                
                options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.dataset.option = option;
                    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                    button.classList.add('option-btn', 'w-full', 'bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-800', 'dark:text-gray-200', 'font-semibold', 'py-3', 'px-4', 'rounded-lg', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', 'transition-all', 'duration-200');
                    button.addEventListener('click', handleUsedToOptionClick);
                    usedToOptionsContainerEl.appendChild(button);
                    optionButtons.push(button);
                });
                usedToCounterEl.textContent = `${sessionUsedToIndex + 1} / ${sessionUsedTo.length}`;

                if (isReviewing) {
                    showPreviousUsedToAnswer();
                }
            }
        }

        function showPreviousUsedToAnswer() {
            const previousAnswer = sessionUsedToAnswers[sessionUsedToIndex];
            if (!previousAnswer) return;

            const currentUsedToData = sessionUsedTo[sessionUsedToIndex];
            usedToAnswered = true;
            usedToCard.style.cursor = 'pointer';

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentUsedToData.correct) {
                    btn.classList.add('correct');
                }
                if (btn.dataset.option === previousAnswer.answer && previousAnswer.answer !== currentUsedToData.correct) {
                    btn.classList.add('incorrect');
                }
            });

            if (previousAnswer.isCorrect) {
                usedToFeedbackMessageEl.textContent = '¡Correcto!';
                usedToFeedbackMessageEl.style.color = '#22c55e';
                 if (currentUsedToData.explanation) {
                    usedToExplanationTextEl.textContent = currentUsedToData.explanation;
                    usedToExplanationContainerEl.classList.remove('opacity-0');
                    usedToExplanationContainerEl.classList.add('opacity-100');
                }
            } else {
                usedToFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                usedToFeedbackMessageEl.style.color = '#ef4444';
                usedToExplanationTextEl.textContent = currentUsedToData.explanation;
                usedToExplanationContainerEl.classList.remove('opacity-0');
                usedToExplanationContainerEl.classList.add('opacity-100');
            }
        }

        function advanceUsedTo() {
            sessionUsedToIndex++;
            displayCurrentUsedTo(false);
        }

        function goBackUsedTo() {
            if (sessionUsedToIndex > 0) {
                sessionUsedToIndex--;
                displayCurrentUsedTo(true);
            }
        }

        function undoUsedTo() {
            if (usedToAnswered) {
                const currentUsedToData = sessionUsedTo[sessionUsedToIndex];
                const previousAnswer = sessionUsedToAnswers[sessionUsedToIndex];
                if (previousAnswer && !previousAnswer.isCorrect) {
                    usedToScore.incorrect--;
                }
                delete sessionUsedToAnswers[sessionUsedToIndex];
                displayCurrentUsedTo(false);
                updateUsedToScoreDisplay();
            }
        }

        function handleUsedToOptionClick(event) {
            event.stopPropagation();
            if (usedToAnswered) return;
            usedToAnswered = true;
            usedToCard.style.cursor = 'pointer';
            
            const currentUsedToData = sessionUsedTo[sessionUsedToIndex];
            const selectedButton = event.currentTarget;
            const selectedAnswer = selectedButton.dataset.option;
            
            const isCorrect = selectedAnswer === currentUsedToData.correct;
            sessionUsedToAnswers[sessionUsedToIndex] = { answer: selectedAnswer, isCorrect: isCorrect };

            optionButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === currentUsedToData.correct) {
                    btn.classList.add('correct');
                }
            });

            if (isCorrect) {
                usedToFeedbackMessageEl.textContent = '¡Correcto!';
                usedToFeedbackMessageEl.style.color = '#22c55e';
                usedToScore.correct++;
            } else {
                usedToFeedbackMessageEl.textContent = 'Inténtalo de nuevo';
                usedToFeedbackMessageEl.style.color = '#ef4444';
                selectedButton.classList.add('incorrect');
                usedToScore.incorrect++;
            }

            if (currentUsedToData.explanation) {
                usedToExplanationTextEl.textContent = currentUsedToData.explanation;
                usedToExplanationContainerEl.classList.remove('opacity-0');
                usedToExplanationContainerEl.classList.add('opacity-100');
            }

            updateUsedToScoreDisplay();
        }

        function handleUsedToCardTransition() {
            if (sessionUsedToIndex >= sessionUsedTo.length) {
                startNewUsedToSession();
            } else if (usedToAnswered) {
                advanceUsedTo();
            }
        }

        usedToCard.addEventListener('click', handleUsedToCardTransition);
        nextUsedToBtn.addEventListener('click', handleUsedToCardTransition);
        backUsedToBtn.addEventListener('click', goBackUsedTo);
        undoUsedToBtn.addEventListener('click', undoUsedTo);


        // --- GLOBAL KEYDOWN LISTENER ---
        window.addEventListener('keydown', (event) => {
            if (event.ctrlKey || event.metaKey) return;

            if (event.key === 'Escape') {
                event.preventDefault();
                showScreen('home-screen');
                return;
            }

            if (!homeScreen.classList.contains('hidden')) {
                 if (event.key.toLowerCase() === 'a') {
                    event.preventDefault();
                    startNewWordsBtn.click();
                } else if (event.key.toLowerCase() === 'b') {
                    event.preventDefault();
                    startCompletePhraseBtn.click();
                } else if (event.key.toLowerCase() === 'c') {
                    event.preventDefault();
                    startPhrasalVerbsBtn.click();
                } else if (event.key.toLowerCase() === 'd') {
                    event.preventDefault();
                    startPhrasalVerbsCompletionBtn.click();
                } else if (event.key.toLowerCase() === 'e') {
                    event.preventDefault();
                    startIdiomsBtn.click();
                } else if (event.key.toLowerCase() === 'f') {
                    event.preventDefault();
                    startIdiomsChallengeBtn.click();
                } else if (event.key.toLowerCase() === 'g') {
                    event.preventDefault();
                    startUsedToBtn.click();
                } else if (event.key.toLowerCase() === 'h') {
                    event.preventDefault();
                    startBeVsGoBtn.click();
                }
            }
            else if (!newWordsSection.classList.contains('hidden')) {
                if(event.key === 'Enter') {
                    event.preventDefault();
                    handleWordCardTransition();
                } else if (event.key.toLowerCase() === 'z') {
                    event.preventDefault();
                    undoWord();
                }
            }
            else if (!completePhraseSection.classList.contains('hidden')) {
                if (phraseAnswered) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        handlePhraseCardTransition();
                    } else if (event.key.toLowerCase() === 'z') {
                        event.preventDefault();
                        undoPhrase();
                    }
                } else if (['a', 'b', 'c', 'd'].includes(event.key.toLowerCase())) {
                    event.preventDefault();
                    const index = event.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                    if (optionButtons[index]) {
                        optionButtons[index].click();
                    }
                }
            }
            else if (!phrasalVerbsSection.classList.contains('hidden')) {
                if(event.key === 'Enter') {
                    event.preventDefault();
                    handlePhrasalVerbCardTransition();
                } else if (event.key.toLowerCase() === 'z') {
                    event.preventDefault();
                    undoPhrasalVerb();
                }
            }
            else if (!idiomsSection.classList.contains('hidden')) {
                if(event.key === 'Enter') {
                    event.preventDefault();
                    handleIdiomCardTransition();
                } else if (event.key.toLowerCase() === 'z') {
                    event.preventDefault();
                    undoIdiom();
                }
            }
            else if (!completePhrasalVerbsSection.classList.contains('hidden')) {
                if (phrasalVerbsCompletionAnswered) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        handlePhrasalVerbsCompletionCardTransition();
                    } else if (event.key.toLowerCase() === 'z') {
                        event.preventDefault();
                        undoPhrasalVerbsCompletion();
                    }
                } else if (['a', 'b', 'c', 'd'].includes(event.key.toLowerCase())) {
                    event.preventDefault();
                    const index = event.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                    if (optionButtons[index]) {
                        optionButtons[index].click();
                    }
                }
            } else if (!idiomsChallengeSection.classList.contains('hidden')) {
                if (idiomsChallengeAnswered) {
                    if (event.key === 'Enter' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        handleIdiomsChallengeCardTransition();
                    } else if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        goBackIdiomsChallenge();
                    } else if (event.key.toLowerCase() === 'z') {
                        event.preventDefault();
                        undoIdiomsChallenge();
                    }
                } else if (['a', 'b', 'c', 'd'].includes(event.key.toLowerCase())) {
                    event.preventDefault();
                    const index = event.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                    if (optionButtons[index]) {
                        optionButtons[index].click();
                    }
                }
            } else if (!usedToSection.classList.contains('hidden')) {
                if (usedToAnswered) {
                    if (event.key === 'Enter' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        handleUsedToCardTransition();
                    } else if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        goBackUsedTo();
                    } else if (event.key.toLowerCase() === 'z') {
                        event.preventDefault();
                        undoUsedTo();
                    }
                } else if (['a', 'b', 'c', 'd'].includes(event.key.toLowerCase())) {
                    event.preventDefault();
                    const index = event.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                    if (optionButtons[index]) {
                        optionButtons[index].click();
                    }
                }
            }
        });

        // --- INITIAL LOAD ---
        showScreen('home-screen');

        // --- DARK MODE ---
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        // Whenever the user explicitly chooses light mode
        // localStorage.theme = 'light'

        // Whenever the user explicitly chooses dark mode
        // localStorage.theme = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('theme')