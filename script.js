// Sistema de Tradução Multilíngue Completo
const TRANSLATIONS = {
    pt: {
        // Interface
        appName: "FitTrack",
        
        // Header
        streakLabel: "Dias seguidos",
        heightLabel: "Altura",
        
        // Home Tab
        completionText: "Complete seu perfil para receber treinos personalizados!",
        completeProfileText: "Completar Perfil",
        editProfileText: "Editar Perfil",
        myWorkoutText: "Meu Treino",
        waterText: "Água",
        timerText: "Timer",
        recommendedWorkoutTitle: "Treino Recomendado",
        seeAllText: "Ver tudo",
        completeProfileMessage: "Complete seu perfil para ver seu treino personalizado",
        todaysExercisesTitle: "Exercícios de Hoje",
        yourSummaryTitle: "Seu Resumo",
        editText: "Editar",
        ageLabel: "Idade",
        weightLabel: "Peso",
        heightLabel2: "Altura",
        
        // Profile Tab
        myProfileTitle: "Meu Perfil",
        fullNameLabel: "Nome Completo",
        ageLabelForm: "Idade",
        yearsText: "anos",
        weightLabelForm: "Peso",
        kgText: "kg",
        heightLabelForm: "Altura",
        cmText: "cm",
        genderLabel: "Gênero",
        maleOption: "Masculino",
        femaleOption: "Feminino",
        otherOption: "Outro",
        preferNotOption: "Prefiro não informar",
        activityLevelLabel: "Nível de Atividade",
        sedentaryOption: "Sedentário (pouco ou nenhum exercício)",
        lightOption: "Levemente ativo (exercício leve 1-3 dias/semana)",
        moderateOption: "Moderadamente ativo (exercício moderado 3-5 dias/semana)",
        activeOption: "Muito ativo (exercício intenso 6-7 dias/semana)",
        veryActiveOption: "Extremamente ativo (exercício muito intenso ou trabalho físico)",
        mainGoalLabel: "Objetivo Principal",
        weightLossOption: "Perda de peso",
        muscleGainOption: "Ganho muscular",
        maintenanceOption: "Manutenção",
        enduranceOption: "Melhorar resistência",
        healthOption: "Saúde geral",
        saveProfileText: "Salvar Perfil",
        clearDataText: "Limpar Dados",
        
        // Training Tab
        personalizedTrainingTitle: "Treinos Personalizados",
        recommendedExercisesTitle: "Exercícios Recomendados",
        planBeginner: "Plano Iniciante",
        planIntermediate: "Plano Intermediário",
        planAdvanced: "Plano Avançado",
        planWeightLoss: "Plano Perda de Peso",
        planMuscleGain: "Plano Hipertrofia",
        
        // Exercises Tab
        exerciseLibraryTitle: "Biblioteca de Exercícios",
        
        // Progress Tab
        progressTitle: "Seu Progresso",
        weightHistoryTitle: "Histórico de Peso",
        bmiCalculatorTitle: "Calculadora de IMC",
        bmiWeightLabel: "Peso (kg)",
        bmiHeightLabel: "Altura (cm)",
        calculateBmiText: "Calcular IMC",
        recentActivityTitle: "Atividade Recente",
        
        // Settings Tab
        settingsTitle: "Configurações",
        languageSettingsTitle: "Idioma / Language",
        languageSettingsDesc: "Altere o idioma do aplicativo",
        supportSettingsTitle: "Apoiar o App",
        supportSettingsDesc: "Ajude a manter o app gratuito",
        notificationsTitle: "Notificações",
        notificationsDesc: "Lembretes de exercícios e água",
        privacyTitle: "Privacidade",
        privacyDesc: "Seus dados estão seguros localmente",
        aboutTitle: "Sobre o App",
        aboutDesc: "FitTrack v1.0 - Personal Trainer Gratuito",
        dataManagementTitle: "Gerenciamento de Dados",
        dataManagementDesc: "Todos os seus dados são armazenados localmente no seu dispositivo. Eles nunca são enviados para servidores externos.",
        exportDataText: "Exportar Dados",
        importDataText: "Importar Dados",
        clearAllDataText: "Limpar Todos os Dados",
        
        // Navigation
        homeNavText: "Início",
        profileNavText: "Perfil",
        trainingNavText: "Treino",
        exercisesNavText: "Exercícios",
        progressNavText: "Progresso",
        settingsNavText: "Config",
        
        // Support
        supportText: "Apoiar App",
        supportModalTitle: "Apoiar o FitTrack",
        supportMessage1: "O FitTrack é um aplicativo gratuito desenvolvido com paixão para ajudar pessoas a melhorarem sua saúde e condicionamento físico.",
        supportMessage2: "Se você encontrou valor no aplicativo e gostaria de apoiar seu desenvolvimento e manutenção, considere fazer uma contribuição.",
        supportWhyTitle: "Por que apoiar?",
        supportReason1: "Manter o aplicativo gratuito para todos",
        supportReason2: "Desenvolver novos recursos e exercícios",
        supportReason3: "Melhorar a experiência do usuário",
        supportReason4: "Manter os servidores funcionando",
        buyCoffeeTitle: "Buy Me a Coffee",
        buyCoffeeDesc: "Apoio único (a partir de €3)",
        shareAppTitle: "Compartilhar App",
        shareAppDesc: "Ajude outras pessoas a descobrirem",
        feedbackTitle: "Dar Feedback",
        feedbackDesc: "Sugestões para melhorias",
        supportThankYou: "Obrigado por usar o FitTrack! Sua saúde é nossa prioridade.",
        
        // Water Tracker
        waterTrackerTitle: "Controle de Hidratação",
        waterDailyGoal: "Meta diária de água",
        add250mlText: "Adicionar 250ml",
        resetTodayText: "Zerar Hoje",
        consumedLabel: "Consumido",
        remainingLabel: "Restante",
        completeLabel: "Completo",
        
        // Timer
        timerTitle: "Timer de Exercício",
        
        // BMI Categories
        bmiUnderweight: "Abaixo do peso",
        bmiNormal: "Peso normal",
        bmiOverweight: "Sobrepeso",
        bmiObesity1: "Obesidade Grau I",
        bmiObesity2: "Obesidade Grau II",
        bmiObesity3: "Obesidade Grau III",
        
        // Exercise Categories
        cardio: "Cardio",
        strength: "Força",
        flexibility: "Flexibilidade",
        balance: "Equilíbrio",
        
        // Difficulty Levels
        beginner: "Iniciante",
        intermediate: "Intermediário",
        advanced: "Avançado",
        
        // Exercise Details
        exerciseInfo: "Informações do Exercício",
        instructionsText: "Instruções",
        tipsText: "Dicas",
        setsText: "Séries",
        repsText: "Repetições",
        restText: "Descanso",
        caloriesText: "Calorias",
        startExerciseText: "Iniciar Exercício",
        noInstructions: "Sem instruções disponíveis",
        
        // Messages
        profileSaved: "Perfil salvo com sucesso!",
        profileCleared: "Perfil limpo com sucesso!",
        dataExported: "Dados exportados com sucesso!",
        dataImported: "Dados importados com sucesso!",
        dataCleared: "Todos os dados foram apagados!",
        waterAdded: "250ml de água adicionados!",
        waterReset: "Água zerada para hoje!",
        exerciseStarted: "Exercício iniciado!",
        exerciseCompleted: "Exercício completado!",
        bmiCalculated: "IMC calculado!",
        timerComplete: "Timer completo!",
        
        // Errors
        errorRequiredFields: "Preencha todos os campos obrigatórios!",
        errorInvalidData: "Dados inválidos!",
        errorImportFailed: "Falha ao importar dados!",
        errorExportFailed: "Falha ao exportar dados!",
        
        // Exercise Names (Completamente traduzido)
        exerciseWalking: "Caminhada",
        exerciseSeatedMarching: "Marcha Sentada",
        exerciseArmRaises: "Elevação de Braços",
        exerciseAnkleCircles: "Círculos de Tornozelo",
        exerciseLegLiftsSeated: "Elevação de Pernas Sentado",
        exerciseDeepBreathing: "Respiração Profunda",
        exerciseChairRaises: "Levantar da Cadeira",
        exerciseArmStretches: "Alongamento de Braços",
        exerciseAnklePumps: "Bombeamento de Tornozelos",
        exerciseNeckRolls: "Rolamento de Pescoço",
        exerciseKneeExtensions: "Extensão de Joelhos",
        exercisePushups: "Flexões",
        exerciseSquats: "Agachamentos",
        exercisePlank: "Prancha",
        exerciseLunges: "Afundos",
        exerciseJumpingJacks: "Polichinelos",
        exerciseBurpees: "Burpees",
        exerciseMountainClimbers: "Montanhistas",
        exerciseBicycleCrunches: "Abdominais Bicicleta",
        exerciseLegRaises: "Elevação de Pernas",
        exerciseGluteBridge: "Elevação Pélvica",
        exerciseSuperman: "Super-Homem",
        exerciseBirdDog: "Cão-Pássaro",
        exerciseArmCircles: "Círculos com Braços",
        exerciseTricepDips: "Mergulhos de Tríceps",
        exerciseHighKnees: "Joelhos Altos",
        exerciseButtKicks: "Chutes no Glúteo",
        exerciseWallSit: "Sentar na Parede",
        exerciseCalfRaises: "Elevação de Panturrilhas",
        exerciseRussianTwists: "Torções Russas",
        exerciseDeadBug: "Inseto Morto",
        
        // Exercise Descriptions (Completamente traduzido)
        descWalking: "Caminhada rápida para saúde cardiovascular",
        descSeatedMarching: "Marchando no lugar enquanto sentado",
        descArmRaises: "Elevação suave de braços até a altura dos ombros",
        descAnkleCircles: "Círculos de tornozelo para melhorar circulação",
        descLegLiftsSeated: "Elevação de pernas enquanto sentado",
        descDeepBreathing: "Exercícios de respiração profunda para relaxamento",
        descChairRaises: "Levantar e sentar de uma cadeira",
        descArmStretches: "Alongamento suave de braços",
        descAnklePumps: "Bombeamento de tornozelos enquanto sentado",
        descNeckRolls: "Rolamento suave de pescoço",
        descKneeExtensions: "Extensão de joelhos enquanto sentado",
        descPushups: "Fortalece peito, ombros e tríceps",
        descSquats: "Trabalha pernas e glúteos",
        descPlank: "Fortalece core e abdômen",
        descLunges: "Melhora equilíbrio e força nas pernas",
        descJumpingJacks: "Exercício cardiovascular completo",
        descBurpees: "Exercício full-body de alta intensidade",
        descMountainClimbers: "Cardio que trabalha core e pernas",
        descBicycleCrunches: "Abdominal que trabalha oblíquos",
        descLegRaises: "Fortalece a parte inferior do abdômen",
        descGluteBridge: "Ativa e fortalece glúteos",
        descSuperman: "Fortalece costas e lombar",
        descBirdDog: "Melhora equilíbrio e estabilidade",
        descArmCircles: "Aquece ombros e melhora mobilidade",
        descTricepDips: "Fortalece tríceps usando peso corporal",
        descHighKnees: "Cardio que eleva frequência cardíaca",
        descButtKicks: "Aquecimento para pernas e glúteos",
        descWallSit: "Isometria para fortalecer quadríceps",
        descCalfRaises: "Fortalece panturrilhas",
        descRussianTwists: "Trabalha oblíquos e core rotacional",
        descDeadBug: "Exercício de core com baixo impacto",
        
        // Exercise Instructions (Completamente traduzido)
        instructionsPushups: "1. Posição de prancha com mãos na largura dos ombros\n2. Mantenha corpo reto como uma tábua\n3. Flexione cotovelos até o peito quase tocar o chão\n4. Empurre de volta à posição inicial\n5. Mantenha core contraído durante todo o movimento",
        instructionsSquats: "1. Pés na largura dos ombros\n2. Mantenha costas retas e peito aberto\n3. Flexione joelhos como se fosse sentar\n4. Desça até coxas ficarem paralelas ao chão\n5. Volte à posição inicial pressionando os calcanhares",
        instructionsPlank: "1. Apoie-se nos antebraços e dedos dos pés\n2. Mantenha corpo reto da cabeça aos pés\n3. Contraia abdômen e glúteos\n4. Não deixe quadris subirem ou descerem\n5. Mantenha respiração constante",
        instructionsLunges: "1. Em pé com os pés juntos\n2. Dê um passo à frente com a perna direita\n3. Abaixe até ambos os joelhos estarem a 90 graus\n4. Mantenha joelho dianteiro acima do tornozelo\n5. Empurre para voltar à posição inicial",
        instructionsJumpingJacks: "1. Fique em pé com pés juntos e braços ao lado do corpo\n2. Salte abrindo as pernas na largura dos ombros\n3. Simultaneamente levante os braços acima da cabeça\n4. Salte de volta à posição inicial\n5. Repita ritmicamente",
        instructionsBurpees: "1. Comece em posição de pé\n2. Abaixe para posição de agachamento\n3. Chute os pés para trás para posição de prancha\n4. Faça uma flexão (opcional)\n5. Pule os pés de volta para agachamento\n6. Exploda para cima com um salto",
        instructionsGluteBridge: "1. Deite de costas com joelhos flexionados\n2. Pés apoiados no chão na largura dos quadris\n3. Levante os quadris em direção ao teto\n4. Contraia glúteos no topo\n5. Abaixe com controle",
        
        // Exercise Tips (Completamente traduzido)
        tipsPushups: "• Mantenha cotovelos próximos ao corpo\n• Não deixe quadris caírem\n• Respire na descida e expire na subida\n• Comece com variações mais fáceis se necessário",
        tipsSquats: "• Mantenha joelhos alinhados com os pés\n• Olhe para frente para manter coluna reta\n• Não curve as costas\n• Use amplitude completa de movimento",
        tipsPlank: "• Não prenda a respiração\n• Distribua peso igualmente\n• Comece com intervalos curtos e aumente gradualmente\n• Use um espelho para verificar o alinhamento",
        tipsLunges: "• Não deixe joelho da frente passar os dedos dos pés\n• Mantenha torso ereto\n• Engaje core para equilíbrio\n• Alterne as pernas",
        
        // Privacy Modal
        privacyModalTitle: "Política de Privacidade",
        privacySection1: "Armazenamento de Dados",
        privacyText1: "Todos os dados do aplicativo são armazenados localmente no seu dispositivo usando localStorage. Nenhuma informação pessoal é enviada para servidores externos ou compartilhada com terceiros.",
        privacySection2: "Dados Coletados",
        privacyText2: "O aplicativo coleta apenas as informações que você fornece voluntariamente no perfil: nome, idade, peso, altura, gênero, nível de atividade e objetivos. Esses dados são usados exclusivamente para gerar treinos personalizados e acompanhar seu progresso.",
        privacySection3: "Permissões",
        privacyText3: "O aplicativo não requer permissões especiais do dispositivo. Funciona inteiramente offline após o carregamento inicial.",
        privacySection4: "Backup de Dados",
        privacyText4: "Você pode exportar seus dados para um arquivo JSON para backup. O backup é armazenado apenas no seu dispositivo e você é responsável por sua segurança.",
        
        // About Modal
        aboutModalTitle: "Sobre o FitTrack",
        aboutAppDesc: "Personal Trainer Gratuito",
        aboutFeaturesTitle: "Recursos Principais",
        aboutFeature1: "Perfil de saúde personalizado",
        aboutFeature2: "Treinos adaptados ao seu IMC",
        aboutFeature3: "Controle de hidratação",
        aboutFeature4: "Timer de exercícios",
        aboutFeature5: "Acompanhamento de progresso",
        aboutFeature6: "Sistema de backup e restauração",
        aboutFeature7: "Suporte a 5 idiomas",
        aboutCreditsTitle: "Créditos",
        aboutCreditsText: "Desenvolvido por UniversusSoft com ❤️",
        aboutContactText: "Contato: support@universussoft.com",
        aboutDisclaimer: "Este aplicativo é fornecido gratuitamente. As informações de saúde são apenas para fins educacionais. Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios.",
        
        // Export/Import Modals
        exportModalTitle: "Exportar Dados",
        exportDescription: "Seus dados serão exportados em formato JSON. Guarde este arquivo em um local seguro para backup.",
        previewTitle: "Prévia dos Dados",
        downloadText: "Baixar Arquivo",
        copyText: "Copiar para Área de Transferência",
        importModalTitle: "Importar Dados",
        importDescription: "Selecione um arquivo JSON de backup para importar seus dados. Isso substituirá todos os dados atuais.",
        selectFileText: "Selecionar Arquivo",
        pasteDataTitle: "Ou cole os dados JSON:",
        importConfirmText: "Importar Dados",
        validateText: "Validar Arquivo",
        
        // Clear Modal
        clearModalTitle: "Confirmar Limpeza de Dados",
        clearWarningText: "Atenção! Esta ação apagará todos os seus dados do aplicativo.",
        whatWillBeDeleted: "O que será apagado:",
        clearItem1: "Seu perfil completo",
        clearItem2: "Histórico de exercícios",
        clearItem3: "Progresso e estatísticas",
        clearItem4: "Metas de água",
        clearItem5: "Preferências do aplicativo",
        clearIrreversible: "Esta ação não pode ser desfeita!",
        clearEverythingText: "Apagar Tudo",
        cancelText: "Cancelar",
        backupAdvice: "Certifique-se de ter feito backup dos seus dados antes de continuar.",
        
        // Language Modal
        languageModalTitle: "Selecionar Idioma",
        portugueseOption: "Português",
        englishOption: "English",
        spanishOption: "Español",
        frenchOption: "Français",
        germanOption: "Deutsch",
        
        // Other UI Texts
        daysText: "Dias/semana",
        minutesText: "Minutos",
        today: "Hoje",
        yesterday: "Ontem",
        linkCopied: "Link copiado para área de transferência!",
        copiedToClipboard: "Copiado para área de transferência!",
        noWeightData: "Sem dados de peso ainda",
        noActivityData: "Sem dados de atividade ainda",
        noExercisesToday: "Nenhum exercício para hoje",
        completeProfileFirst: "Complete seu perfil primeiro",
        notificationsComingSoon: "Notificações em breve!",
        validFile: "Arquivo válido!",
        importVersionWarning: "Este backup é de uma versão diferente. Continuar?",
        importConfirmWarning: "Isso substituirá todos os dados atuais. Continuar?",
        
        // BMI Descriptions
        bmiDescUnderweight: "Considere aumentar a ingestão calórica e ganhar massa muscular.",
        bmiDescNormal: "Peso saudável! Mantenha hábitos saudáveis.",
        bmiDescOverweight: "Considere aumentar a atividade física e ajustar a dieta.",
        bmiDescObesity1: "Recomenda-se consultar um profissional de saúde.",
        bmiDescObesity2: "Procure orientação médica para um plano seguro.",
        bmiDescObesity3: "Orientação médica é essencial para sua saúde."
    },
    
    en: {
        // Interface
        appName: "FitTrack",
        
        // Header
        streakLabel: "Day streak",
        heightLabel: "Height",
        
        // Home Tab
        completionText: "Complete your profile to receive personalized workouts!",
        completeProfileText: "Complete Profile",
        editProfileText: "Edit Profile",
        myWorkoutText: "My Workout",
        waterText: "Water",
        timerText: "Timer",
        recommendedWorkoutTitle: "Recommended Workout",
        seeAllText: "See all",
        completeProfileMessage: "Complete your profile to see your personalized workout",
        todaysExercisesTitle: "Today's Exercises",
        yourSummaryTitle: "Your Summary",
        editText: "Edit",
        ageLabel: "Age",
        weightLabel: "Weight",
        heightLabel2: "Height",
        
        // Profile Tab
        myProfileTitle: "My Profile",
        fullNameLabel: "Full Name",
        ageLabelForm: "Age",
        yearsText: "years",
        weightLabelForm: "Weight",
        kgText: "kg",
        heightLabelForm: "Height",
        cmText: "cm",
        genderLabel: "Gender",
        maleOption: "Male",
        femaleOption: "Female",
        otherOption: "Other",
        preferNotOption: "Prefer not to say",
        activityLevelLabel: "Activity Level",
        sedentaryOption: "Sedentary (little or no exercise)",
        lightOption: "Lightly active (light exercise 1-3 days/week)",
        moderateOption: "Moderately active (moderate exercise 3-5 days/week)",
        activeOption: "Very active (hard exercise 6-7 days/week)",
        veryActiveOption: "Extremely active (very hard exercise or physical job)",
        mainGoalLabel: "Main Goal",
        weightLossOption: "Weight loss",
        muscleGainOption: "Muscle gain",
        maintenanceOption: "Maintenance",
        enduranceOption: "Improve endurance",
        healthOption: "General health",
        saveProfileText: "Save Profile",
        clearDataText: "Clear Data",
        
        // Training Tab
        personalizedTrainingTitle: "Personalized Training",
        recommendedExercisesTitle: "Recommended Exercises",
        planBeginner: "Beginner Plan",
        planIntermediate: "Intermediate Plan",
        planAdvanced: "Advanced Plan",
        planWeightLoss: "Weight Loss Plan",
        planMuscleGain: "Hypertrophy Plan",
        
        // Exercises Tab
        exerciseLibraryTitle: "Exercise Library",
        
        // Progress Tab
        progressTitle: "Your Progress",
        weightHistoryTitle: "Weight History",
        bmiCalculatorTitle: "BMI Calculator",
        bmiWeightLabel: "Weight (kg)",
        bmiHeightLabel: "Height (cm)",
        calculateBmiText: "Calculate BMI",
        recentActivityTitle: "Recent Activity",
        
        // Settings Tab
        settingsTitle: "Settings",
        languageSettingsTitle: "Language / Idioma",
        languageSettingsDesc: "Change application language",
        supportSettingsTitle: "Support App",
        supportSettingsDesc: "Help keep the app free",
        notificationsTitle: "Notifications",
        notificationsDesc: "Exercise and water reminders",
        privacyTitle: "Privacy",
        privacyDesc: "Your data is securely stored locally",
        aboutTitle: "About App",
        aboutDesc: "FitTrack v1.0 - Free Personal Trainer",
        dataManagementTitle: "Data Management",
        dataManagementDesc: "All your data is stored locally on your device. It is never sent to external servers.",
        exportDataText: "Export Data",
        importDataText: "Import Data",
        clearAllDataText: "Clear All Data",
        
        // Navigation
        homeNavText: "Home",
        profileNavText: "Profile",
        trainingNavText: "Training",
        exercisesNavText: "Exercises",
        progressNavText: "Progress",
        settingsNavText: "Settings",
        
        // Support
        supportText: "Support App",
        supportModalTitle: "Support FitTrack",
        supportMessage1: "FitTrack is a free app developed with passion to help people improve their health and fitness.",
        supportMessage2: "If you found value in the app and would like to support its development and maintenance, consider making a contribution.",
        supportWhyTitle: "Why support?",
        supportReason1: "Keep the app free for everyone",
        supportReason2: "Develop new features and exercises",
        supportReason3: "Improve user experience",
        supportReason4: "Keep servers running",
        buyCoffeeTitle: "Buy Me a Coffee",
        buyCoffeeDesc: "One-time support (from €3)",
        shareAppTitle: "Share App",
        shareAppDesc: "Help others discover it",
        feedbackTitle: "Give Feedback",
        feedbackDesc: "Suggestions for improvements",
        supportThankYou: "Thank you for using FitTrack! Your health is our priority.",
        
        // Water Tracker
        waterTrackerTitle: "Hydration Tracker",
        waterDailyGoal: "Daily water goal",
        add250mlText: "Add 250ml",
        resetTodayText: "Reset Today",
        consumedLabel: "Consumed",
        remainingLabel: "Remaining",
        completeLabel: "Complete",
        
        // Timer
        timerTitle: "Exercise Timer",
        
        // BMI Categories
        bmiUnderweight: "Underweight",
        bmiNormal: "Normal weight",
        bmiOverweight: "Overweight",
        bmiObesity1: "Obesity Class I",
        bmiObesity2: "Obesity Class II",
        bmiObesity3: "Obesity Class III",
        
        // Exercise Categories
        cardio: "Cardio",
        strength: "Strength",
        flexibility: "Flexibility",
        balance: "Balance",
        
        // Difficulty Levels
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        
        // Exercise Details
        exerciseInfo: "Exercise Information",
        instructionsText: "Instructions",
        tipsText: "Tips",
        setsText: "Sets",
        repsText: "Reps",
        restText: "Rest",
        caloriesText: "Calories",
        startExerciseText: "Start Exercise",
        noInstructions: "No instructions available",
        
        // Messages
        profileSaved: "Profile saved successfully!",
        profileCleared: "Profile cleared successfully!",
        dataExported: "Data exported successfully!",
        dataImported: "Data imported successfully!",
        dataCleared: "All data has been cleared!",
        waterAdded: "250ml of water added!",
        waterReset: "Water reset for today!",
        exerciseStarted: "Exercise started!",
        exerciseCompleted: "Exercise completed!",
        bmiCalculated: "BMI calculated!",
        timerComplete: "Timer complete!",
        
        // Errors
        errorRequiredFields: "Please fill all required fields!",
        errorInvalidData: "Invalid data!",
        errorImportFailed: "Failed to import data!",
        errorExportFailed: "Failed to export data!",
        
        // Exercise Names (Completely translated)
        exerciseWalking: "Walking",
        exerciseSeatedMarching: "Seated Marching",
        exerciseArmRaises: "Arm Raises",
        exerciseAnkleCircles: "Ankle Circles",
        exerciseLegLiftsSeated: "Seated Leg Lifts",
        exerciseDeepBreathing: "Deep Breathing",
        exerciseChairRaises: "Chair Raises",
        exerciseArmStretches: "Arm Stretches",
        exerciseAnklePumps: "Ankle Pumps",
        exerciseNeckRolls: "Neck Rolls",
        exerciseKneeExtensions: "Knee Extensions",
        exercisePushups: "Push-ups",
        exerciseSquats: "Squats",
        exercisePlank: "Plank",
        exerciseLunges: "Lunges",
        exerciseJumpingJacks: "Jumping Jacks",
        exerciseBurpees: "Burpees",
        exerciseMountainClimbers: "Mountain Climbers",
        exerciseBicycleCrunches: "Bicycle Crunches",
        exerciseLegRaises: "Leg Raises",
        exerciseGluteBridge: "Glute Bridge",
        exerciseSuperman: "Superman",
        exerciseBirdDog: "Bird Dog",
        exerciseArmCircles: "Arm Circles",
        exerciseTricepDips: "Tricep Dips",
        exerciseHighKnees: "High Knees",
        exerciseButtKicks: "Butt Kicks",
        exerciseWallSit: "Wall Sit",
        exerciseCalfRaises: "Calf Raises",
        exerciseRussianTwists: "Russian Twists",
        exerciseDeadBug: "Dead Bug",
        
        // Exercise Descriptions (Completely translated)
        descWalking: "Brisk walking for cardiovascular health",
        descSeatedMarching: "Marching in place while seated",
        descArmRaises: "Gentle arm raises to shoulder height",
        descAnkleCircles: "Ankle circles to improve circulation",
        descLegLiftsSeated: "Leg lifts while seated",
        descDeepBreathing: "Deep breathing exercises for relaxation",
        descChairRaises: "Standing up and sitting down from a chair",
        descArmStretches: "Gentle arm stretches",
        descAnklePumps: "Ankle pumps while seated",
        descNeckRolls: "Gentle neck rolls",
        descKneeExtensions: "Knee extensions while seated",
        descPushups: "Strengthens chest, shoulders and triceps",
        descSquats: "Works legs and glutes",
        descPlank: "Strengthens core and abs",
        descLunges: "Improves balance and leg strength",
        descJumpingJacks: "Complete cardiovascular exercise",
        descBurpees: "Full-body high intensity exercise",
        descMountainClimbers: "Cardio that works core and legs",
        descBicycleCrunches: "Ab exercise that works obliques",
        descLegRaises: "Strengthens lower abs",
        descGluteBridge: "Activates and strengthens glutes",
        descSuperman: "Strengthens back and lower back",
        descBirdDog: "Improves balance and stability",
        descArmCircles: "Warms up shoulders and improves mobility",
        descTricepDips: "Strengthens triceps using bodyweight",
        descHighKnees: "Cardio that elevates heart rate",
        descButtKicks: "Warmup for legs and glutes",
        descWallSit: "Isometric exercise to strengthen quads",
        descCalfRaises: "Strengthens calves",
        descRussianTwists: "Works obliques and rotational core",
        descDeadBug: "Low impact core exercise",
        
        // Exercise Instructions (Completely translated)
        instructionsPushups: "1. Plank position with hands shoulder-width apart\n2. Keep body straight like a board\n3. Bend elbows until chest almost touches ground\n4. Push back to starting position\n5. Keep core engaged throughout movement",
        instructionsSquats: "1. Feet shoulder-width apart\n2. Keep back straight and chest up\n3. Bend knees as if sitting down\n4. Lower until thighs are parallel to ground\n5. Return to start by pressing through heels",
        instructionsPlank: "1. Support yourself on forearms and toes\n2. Keep body straight from head to toes\n3. Engage abs and glutes\n4. Don't let hips rise or sag\n5. Maintain steady breathing",
        instructionsLunges: "1. Stand with feet together\n2. Step forward with right leg\n3. Lower until both knees at 90 degrees\n4. Keep front knee above ankle\n5. Push back to starting position",
        instructionsJumpingJacks: "1. Stand with feet together and arms at sides\n2. Jump while spreading legs shoulder-width apart\n3. Simultaneously raise arms overhead\n4. Jump back to starting position\n5. Repeat rhythmically",
        instructionsBurpees: "1. Start in standing position\n2. Drop into squat position\n3. Kick feet back to plank position\n4. Perform a push-up (optional)\n5. Jump feet back to squat\n6. Explode upward with jump",
        instructionsGluteBridge: "1. Lie on back with knees bent\n2. Feet flat on floor hip-width apart\n3. Lift hips toward ceiling\n4. Squeeze glutes at top\n5. Lower with control",
        
        // Exercise Tips (Completely translated)
        tipsPushups: "• Keep elbows close to body\n• Don't let hips sag\n• Breathe in on descent, out on ascent\n• Start with easier variations if needed",
        tipsSquats: "• Keep knees aligned with feet\n• Look forward to keep spine straight\n• Don't round your back\n• Use full range of motion",
        tipsPlank: "• Don't hold your breath\n• Distribute weight evenly\n• Start with short intervals and gradually increase\n• Use a mirror to check alignment",
        tipsLunges: "• Don't let front knee go past toes\n• Keep torso upright\n• Engage core for balance\n• Alternate legs",
        
        // Privacy Modal
        privacyModalTitle: "Privacy Policy",
        privacySection1: "Data Storage",
        privacyText1: "All app data is stored locally on your device using localStorage. No personal information is sent to external servers or shared with third parties.",
        privacySection2: "Data Collected",
        privacyText2: "The app only collects information you voluntarily provide in the profile: name, age, weight, height, gender, activity level and goals. This data is used exclusively to generate personalized workouts and track your progress.",
        privacySection3: "Permissions",
        privacyText3: "The app does not require special device permissions. It works entirely offline after initial loading.",
        privacySection4: "Data Backup",
        privacyText4: "You can export your data to a JSON file for backup. The backup is stored only on your device and you are responsible for its security.",
        
        // About Modal
        aboutModalTitle: "About FitTrack",
        aboutAppDesc: "Free Personal Trainer",
        aboutFeaturesTitle: "Main Features",
        aboutFeature1: "Personalized health profile",
        aboutFeature2: "Workouts adapted to your BMI",
        aboutFeature3: "Hydration tracking",
        aboutFeature4: "Exercise timer",
        aboutFeature5: "Progress tracking",
        aboutFeature6: "Backup and restore system",
        aboutFeature7: "Support for 5 languages",
        aboutCreditsTitle: "Credits",
        aboutCreditsText: "Developed by UniversusSoft with ❤️",
        aboutContactText: "Contact: support@universussoft.com",
        aboutDisclaimer: "This app is provided for free. Health information is for educational purposes only. Consult a healthcare professional before starting any exercise program.",
        
        // Export/Import Modals
        exportModalTitle: "Export Data",
        exportDescription: "Your data will be exported in JSON format. Save this file in a secure location for backup.",
        previewTitle: "Data Preview",
        downloadText: "Download File",
        copyText: "Copy to Clipboard",
        importModalTitle: "Import Data",
        importDescription: "Select a JSON backup file to import your data. This will replace all current data.",
        selectFileText: "Select File",
        pasteDataTitle: "Or paste JSON data:",
        importConfirmText: "Import Data",
        validateText: "Validate File",
        
        // Clear Modal
        clearModalTitle: "Confirm Data Clearance",
        clearWarningText: "Warning! This action will delete all your app data.",
        whatWillBeDeleted: "What will be deleted:",
        clearItem1: "Your complete profile",
        clearItem2: "Exercise history",
        clearItem3: "Progress and statistics",
        clearItem4: "Water goals",
        clearItem5: "App preferences",
        clearIrreversible: "This action cannot be undone!",
        clearEverythingText: "Delete Everything",
        cancelText: "Cancel",
        backupAdvice: "Make sure you have backed up your data before proceeding.",
        
        // Language Modal
        languageModalTitle: "Select Language",
        portugueseOption: "Portuguese",
        englishOption: "English",
        spanishOption: "Spanish",
        frenchOption: "French",
        germanOption: "German",
        
        // Other UI Texts
        daysText: "Days/week",
        minutesText: "Minutes",
        today: "Today",
        yesterday: "Yesterday",
        linkCopied: "Link copied to clipboard!",
        copiedToClipboard: "Copied to clipboard!",
        noWeightData: "No weight data yet",
        noActivityData: "No activity data yet",
        noExercisesToday: "No exercises for today",
        completeProfileFirst: "Complete your profile first",
        notificationsComingSoon: "Notifications coming soon!",
        validFile: "Valid file!",
        importVersionWarning: "This backup is from a different version. Continue?",
        importConfirmWarning: "This will replace all current data. Continue?",
        
        // BMI Descriptions
        bmiDescUnderweight: "Consider increasing calorie intake and gaining muscle mass.",
        bmiDescNormal: "Healthy weight! Maintain healthy habits.",
        bmiDescOverweight: "Consider increasing physical activity and adjusting diet.",
        bmiDescObesity1: "It is recommended to consult a healthcare professional.",
        bmiDescObesity2: "Seek medical guidance for a safe plan.",
        bmiDescObesity3: "Medical guidance is essential for your health."
    },
    
    es: {
        // Interface
        appName: "FitTrack",
        
        // Header
        streakLabel: "Racha de días",
        heightLabel: "Altura",
        
        // Home Tab
        completionText: "¡Completa tu perfil para recibir entrenamientos personalizados!",
        completeProfileText: "Completar Perfil",
        editProfileText: "Editar Perfil",
        myWorkoutText: "Mi Entrenamiento",
        waterText: "Agua",
        timerText: "Temporizador",
        recommendedWorkoutTitle: "Entrenamiento Recomendado",
        seeAllText: "Ver todo",
        completeProfileMessage: "Completa tu perfil para ver tu entrenamiento personalizado",
        todaysExercisesTitle: "Ejercicios de Hoy",
        yourSummaryTitle: "Tu Resumen",
        editText: "Editar",
        ageLabel: "Edad",
        weightLabel: "Peso",
        heightLabel2: "Altura",
        
        // Profile Tab
        myProfileTitle: "Mi Perfil",
        fullNameLabel: "Nombre Completo",
        ageLabelForm: "Edad",
        yearsText: "años",
        weightLabelForm: "Peso",
        kgText: "kg",
        heightLabelForm: "Altura",
        cmText: "cm",
        genderLabel: "Género",
        maleOption: "Masculino",
        femaleOption: "Femenino",
        otherOption: "Otro",
        preferNotOption: "Prefiero no decirlo",
        activityLevelLabel: "Nivel de Actividad",
        sedentaryOption: "Sedentario (poco o ningún ejercicio)",
        lightOption: "Ligeramente activo (ejercicio ligero 1-3 días/semana)",
        moderateOption: "Moderadamente activo (ejercicio moderado 3-5 días/semana)",
        activeOption: "Muy activo (ejercicio intenso 6-7 días/semana)",
        veryActiveOption: "Extremadamente activo (ejercicio muy intenso o trabajo físico)",
        mainGoalLabel: "Objetivo Principal",
        weightLossOption: "Pérdida de peso",
        muscleGainOption: "Ganancia muscular",
        maintenanceOption: "Mantenimiento",
        enduranceOption: "Mejorar resistencia",
        healthOption: "Salud general",
        saveProfileText: "Guardar Perfil",
        clearDataText: "Limpiar Datos",
        
        // Training Tab
        personalizedTrainingTitle: "Entrenamiento Personalizado",
        recommendedExercisesTitle: "Ejercicios Recomendados",
        planBeginner: "Plan Principiante",
        planIntermediate: "Plan Intermedio",
        planAdvanced: "Plan Avanzado",
        planWeightLoss: "Plan Pérdida de Peso",
        planMuscleGain: "Plan Hipertrofia",
        
        // Exercises Tab
        exerciseLibraryTitle: "Biblioteca de Ejercicios",
        
        // Progress Tab
        progressTitle: "Tu Progreso",
        weightHistoryTitle: "Historial de Peso",
        bmiCalculatorTitle: "Calculadora de IMC",
        bmiWeightLabel: "Peso (kg)",
        bmiHeightLabel: "Altura (cm)",
        calculateBmiText: "Calcular IMC",
        recentActivityTitle: "Actividad Reciente",
        
        // Settings Tab
        settingsTitle: "Configuración",
        languageSettingsTitle: "Idioma / Language",
        languageSettingsDesc: "Cambiar idioma de la aplicación",
        supportSettingsTitle: "Apoyar la App",
        supportSettingsDesc: "Ayuda a mantener la aplicación gratuita",
        notificationsTitle: "Notificaciones",
        notificationsDesc: "Recordatorios de ejercicio y agua",
        privacyTitle: "Privacidad",
        privacyDesc: "Tus datos están seguros localmente",
        aboutTitle: "Acerca de la App",
        aboutDesc: "FitTrack v1.0 - Entrenador Personal Gratuito",
        dataManagementTitle: "Gestión de Datos",
        dataManagementDesc: "Todos tus datos se almacenan localmente en tu dispositivo. Nunca se envían a servidores externos.",
        exportDataText: "Exportar Datos",
        importDataText: "Importar Datos",
        clearAllDataText: "Limpiar Todos los Datos",
        
        // Navigation
        homeNavText: "Inicio",
        profileNavText: "Perfil",
        trainingNavText: "Entrenamiento",
        exercisesNavText: "Ejercicios",
        progressNavText: "Progreso",
        settingsNavText: "Config",
        
        // Support
        supportText: "Apoyar App",
        supportModalTitle: "Apoyar FitTrack",
        supportMessage1: "FitTrack es una aplicación gratuita desarrollada con pasión para ayudar a las personas a mejorar su salud y condición física.",
        supportMessage2: "Si encontraste valor en la aplicación y te gustaría apoyar su desarrollo y mantenimiento, considera hacer una contribución.",
        supportWhyTitle: "¿Por qué apoyar?",
        supportReason1: "Mantener la aplicación gratuita para todos",
        supportReason2: "Desarrollar nuevas funciones y ejercicios",
        supportReason3: "Mejorar la experiencia del usuario",
        supportReason4: "Mantener los servidores funcionando",
        buyCoffeeTitle: "Buy Me a Coffee",
        buyCoffeeDesc: "Apoyo único (desde €3)",
        shareAppTitle: "Compartir App",
        shareAppDesc: "Ayuda a otros a descubrirla",
        feedbackTitle: "Dar Retroalimentación",
        feedbackDesc: "Sugerencias para mejoras",
        supportThankYou: "¡Gracias por usar FitTrack! Tu salud es nuestra prioridad.",
        
        // Water Tracker
        waterTrackerTitle: "Control de Hidratación",
        waterDailyGoal: "Meta diaria de agua",
        add250mlText: "Agregar 250ml",
        resetTodayText: "Reiniciar Hoy",
        consumedLabel: "Consumido",
        remainingLabel: "Restante",
        completeLabel: "Completo",
        
        // Timer
        timerTitle: "Temporizador de Ejercicio",
        
        // BMI Categories
        bmiUnderweight: "Bajo peso",
        bmiNormal: "Peso normal",
        bmiOverweight: "Sobrepeso",
        bmiObesity1: "Obesidad Grado I",
        bmiObesity2: "Obesidad Grado II",
        bmiObesity3: "Obesidad Grado III",
        
        // Exercise Categories
        cardio: "Cardio",
        strength: "Fuerza",
        flexibility: "Flexibilidad",
        balance: "Equilibrio",
        
        // Difficulty Levels
        beginner: "Principiante",
        intermediate: "Intermedio",
        advanced: "Avanzado",
        
        // Exercise Details
        exerciseInfo: "Información del Ejercicio",
        instructionsText: "Instrucciones",
        tipsText: "Consejos",
        setsText: "Series",
        repsText: "Repeticiones",
        restText: "Descanso",
        caloriesText: "Calorías",
        startExerciseText: "Iniciar Ejercicio",
        noInstructions: "Sin instrucciones disponibles",
        
        // Messages
        profileSaved: "¡Perfil guardado con éxito!",
        profileCleared: "¡Perfil limpiado con éxito!",
        dataExported: "¡Datos exportados con éxito!",
        dataImported: "¡Datos importados con éxito!",
        dataCleared: "¡Todos los datos han sido eliminados!",
        waterAdded: "¡250ml de agua agregados!",
        waterReset: "¡Agua reiniciada para hoy!",
        exerciseStarted: "¡Ejercicio iniciado!",
        exerciseCompleted: "¡Ejercicio completado!",
        bmiCalculated: "¡IMC calculado!",
        timerComplete: "¡Temporizador completo!",
        
        // Errors
        errorRequiredFields: "¡Por favor completa todos los campos requeridos!",
        errorInvalidData: "¡Datos inválidos!",
        errorImportFailed: "¡Error al importar datos!",
        errorExportFailed: "¡Error al exportar datos!",
        
        // Exercise Names (Completamente traducido)
        exerciseWalking: "Caminata",
        exerciseSeatedMarching: "Marcha Sentada",
        exerciseArmRaises: "Elevación de Brazos",
        exerciseAnkleCircles: "Círculos de Tobillo",
        exerciseLegLiftsSeated: "Elevación de Piernas Sentado",
        exerciseDeepBreathing: "Respiración Profunda",
        exerciseChairRaises: "Levantarse de la Silla",
        exerciseArmStretches: "Estiramiento de Brazos",
        exerciseAnklePumps: "Bombeo de Tobillos",
        exerciseNeckRolls: "Rotación de Cuello",
        exerciseKneeExtensions: "Extensión de Rodillas",
        exercisePushups: "Flexiones",
        exerciseSquats: "Sentadillas",
        exercisePlank: "Plancha",
        exerciseLunges: "Estocadas",
        exerciseJumpingJacks: "Saltos de Tijera",
        exerciseBurpees: "Burpees",
        exerciseMountainClimbers: "Montañistas",
        exerciseBicycleCrunches: "Abdominales Bicicleta",
        exerciseLegRaises: "Elevación de Piernas",
        exerciseGluteBridge: "Puente de Glúteos",
        exerciseSuperman: "Superhombre",
        exerciseBirdDog: "Perro-Pájaro",
        exerciseArmCircles: "Círculos con Brazos",
        exerciseTricepDips: "Fondos de Tríceps",
        exerciseHighKnees: "Rodillas Altas",
        exerciseButtKicks: "Patadas al Glúteo",
        exerciseWallSit: "Sentadilla en Pared",
        exerciseCalfRaises: "Elevación de Pantorrillas",
        exerciseRussianTwists: "Giros Rusos",
        exerciseDeadBug: "Insecto Muerto",
        
        // Exercise Descriptions (Completamente traducido)
        descWalking: "Caminata rápida para salud cardiovascular",
        descSeatedMarching: "Marchando en el lugar mientras está sentado",
        descArmRaises: "Elevación suave de brazos hasta la altura de los hombros",
        descAnkleCircles: "Círculos de tobillo para mejorar la circulación",
        descLegLiftsSeated: "Elevación de piernas mientras está sentado",
        descDeepBreathing: "Ejercicios de respiración profunda para relajación",
        descChairRaises: "Pararse y sentarse de una silla",
        descArmStretches: "Estiramiento suave de brazos",
        descAnklePumps: "Bombeo de tobillos mientras está sentado",
        descNeckRolls: "Rotación suave de cuello",
        descKneeExtensions: "Extensión de rodillas mientras está sentado",
        descPushups: "Fortalece pecho, hombros y tríceps",
        descSquats: "Trabaja piernas y glúteos",
        descPlank: "Fortalece core y abdomen",
        descLunges: "Mejora equilibrio y fuerza en piernas",
        descJumpingJacks: "Ejercicio cardiovascular completo",
        descBurpees: "Ejercicio full-body de alta intensidad",
        descMountainClimbers: "Cardio que trabaja core y piernas",
        descBicycleCrunches: "Abdominal que trabaja oblicuos",
        descLegRaises: "Fortalece la parte inferior del abdomen",
        descGluteBridge: "Activa y fortalece glúteos",
        descSuperman: "Fortalece espalda y lumbar",
        descBirdDog: "Mejora equilibrio y estabilidad",
        descArmCircles: "Calienta hombros y mejora movilidad",
        descTricepDips: "Fortalece tríceps usando peso corporal",
        descHighKnees: "Cardio que eleva frecuencia cardíaca",
        descButtKicks: "Calentamiento para piernas y glúteos",
        descWallSit: "Isometría para fortalecer cuádriceps",
        descCalfRaises: "Fortalece pantorrillas",
        descRussianTwists: "Trabaja oblicuos y core rotacional",
        descDeadBug: "Ejercicio de core de bajo impacto",
        
        // Exercise Instructions (Completamente traducido)
        instructionsPushups: "1. Posición de plancha con manos al ancho de hombros\n2. Mantén cuerpo recto como una tabla\n3. Flexiona codos hasta que el pecho casi toque el suelo\n4. Empuja de vuelta a la posición inicial\n5. Mantén core contraído durante todo el movimiento",
        instructionsSquats: "1. Pies al ancho de hombros\n2. Mantén espalda recta y pecho abierto\n3. Flexiona rodillas como si te fueras a sentar\n4. Baja hasta que muslos estén paralelos al suelo\n5. Vuelve a la posición inicial presionando los talones",
        instructionsPlank: "1. Apóyate en antebrazos y dedos de los pies\n2. Mantén cuerpo recto de cabeza a pies\n3. Contrae abdomen y glúteos\n4. No dejes que caderas suban o bajen\n5. Mantén respiración constante",
        instructionsLunges: "1. De pie con los pies juntos\n2. Da un paso al frente con la pierna derecha\n3. Baja hasta que ambas rodillas estén a 90 grados\n4. Mantén rodilla delantera sobre el tobillo\n5. Empuja para volver a la posición inicial",
        instructionsJumpingJacks: "1. Ponte de pie con pies juntos y brazos a los lados\n2. Salta abriendo las piernas al ancho de hombros\n3. Simultáneamente levanta los brazos sobre la cabeza\n4. Salta de vuelta a la posición inicial\n5. Repite rítmicamente",
        instructionsBurpees: "1. Comienza en posición de pie\n2. Baja a posición de sentadilla\n3. Lanza los pies atrás a posición de plancha\n4. Haz una flexión (opcional)\n5. Salta los pies de vuelta a sentadilla\n6. Explota hacia arriba con un salto",
        instructionsGluteBridge: "1. Acuéstate boca arriba con rodillas flexionadas\n2. Pies apoyados en el suelo al ancho de caderas\n3. Levanta caderas hacia el techo\n4. Aprieta glúteos en la parte superior\n5. Baja con control",
        
        // Exercise Tips (Completamente traducido)
        tipsPushups: "• Mantén codos cerca del cuerpo\n• No dejes que caderas se hundan\n• Inspira al bajar, espira al subir\n• Comienza con variaciones más fáciles si es necesario",
        tipsSquats: "• Mantén rodillas alineadas con los pies\n• Mira al frente para mantener columna recta\n• No curves la espalda\n• Usa amplitud completa de movimiento",
        tipsPlank: "• No contengas la respiración\n• Distribuye peso equitativamente\n• Comienza con intervalos cortos y aumenta gradualmente\n• Usa un espejo para verificar alineación",
        tipsLunges: "• No dejes que rodilla delantera pase los dedos de los pies\n• Mantén torso erguido\n• Engaja core para equilibrio\n• Alterna las piernas",
        
        // Privacy Modal
        privacyModalTitle: "Política de Privacidad",
        privacySection1: "Almacenamiento de Datos",
        privacyText1: "Todos los datos de la aplicación se almacenan localmente en tu dispositivo usando localStorage. Ninguna información personal se envía a servidores externos o se comparte con terceros.",
        privacySection2: "Datos Recopilados",
        privacyText2: "La aplicación solo recopila la información que proporcionas voluntariamente en el perfil: nombre, edad, peso, altura, género, nivel de actividad y objetivos. Estos datos se usan exclusivamente para generar entrenamientos personalizados y seguir tu progreso.",
        privacySection3: "Permisos",
        privacyText3: "La aplicación no requiere permisos especiales del dispositivo. Funciona completamente offline después de la carga inicial.",
        privacySection4: "Copia de Seguridad",
        privacyText4: "Puedes exportar tus datos a un archivo JSON para copia de seguridad. La copia de seguridad se almacena solo en tu dispositivo y eres responsable de su seguridad.",
        
        // About Modal
        aboutModalTitle: "Acerca de FitTrack",
        aboutAppDesc: "Entrenador Personal Gratuito",
        aboutFeaturesTitle: "Características Principales",
        aboutFeature1: "Perfil de salud personalizado",
        aboutFeature2: "Entrenamientos adaptados a tu IMC",
        aboutFeature3: "Control de hidratación",
        aboutFeature4: "Temporizador de ejercicios",
        aboutFeature5: "Seguimiento de progreso",
        aboutFeature6: "Sistema de copia de seguridad y restauración",
        aboutFeature7: "Soporte para 5 idiomas",
        aboutCreditsTitle: "Créditos",
        aboutCreditsText: "Desarrollado por UniversusSoft con ❤️",
        aboutContactText: "Contacto: support@universussoft.com",
        aboutDisclaimer: "Esta aplicación se proporciona gratuitamente. La información de salud es solo para fines educativos. Consulta a un profesional de la salud antes de comenzar cualquier programa de ejercicios.",
        
        // Export/Import Modals
        exportModalTitle: "Exportar Datos",
        exportDescription: "Tus datos serán exportados en formato JSON. Guarda este archivo en un lugar seguro para copia de seguridad.",
        previewTitle: "Vista Previa de Datos",
        downloadText: "Descargar Archivo",
        copyText: "Copiar al Portapapeles",
        importModalTitle: "Importar Datos",
        importDescription: "Selecciona un archivo JSON de copia de seguridad para importar tus datos. Esto reemplazará todos los datos actuales.",
        selectFileText: "Seleccionar Archivo",
        pasteDataTitle: "O pega los datos JSON:",
        importConfirmText: "Importar Datos",
        validateText: "Validar Archivo",
        
        // Clear Modal
        clearModalTitle: "Confirmar Limpieza de Datos",
        clearWarningText: "¡Atención! Esta acción eliminará todos tus datos de la aplicación.",
        whatWillBeDeleted: "Lo que será eliminado:",
        clearItem1: "Tu perfil completo",
        clearItem2: "Historial de ejercicios",
        clearItem3: "Progreso y estadísticas",
        clearItem4: "Metas de agua",
        clearItem5: "Preferencias de la aplicación",
        clearIrreversible: "¡Esta acción no se puede deshacer!",
        clearEverythingText: "Eliminar Todo",
        cancelText: "Cancelar",
        backupAdvice: "Asegúrate de haber hecho copia de seguridad de tus datos antes de continuar.",
        
        // Language Modal
        languageModalTitle: "Seleccionar Idioma",
        portugueseOption: "Portugués",
        englishOption: "Inglés",
        spanishOption: "Español",
        frenchOption: "Francés",
        germanOption: "Alemán",
        
        // Other UI Texts
        daysText: "Días/semana",
        minutesText: "Minutos",
        today: "Hoy",
        yesterday: "Ayer",
        linkCopied: "¡Enlace copiado al portapapeles!",
        copiedToClipboard: "¡Copiado al portapapeles!",
        noWeightData: "Sin datos de peso aún",
        noActivityData: "Sin datos de actividad aún",
        noExercisesToday: "Sin ejercicios para hoy",
        completeProfileFirst: "Completa tu perfil primero",
        notificationsComingSoon: "¡Notificaciones próximamente!",
        validFile: "¡Archivo válido!",
        importVersionWarning: "Esta copia de seguridad es de una versión diferente. ¿Continuar?",
        importConfirmWarning: "Esto reemplazará todos los datos actuales. ¿Continuar?",
        
        // BMI Descriptions
        bmiDescUnderweight: "Considere aumentar la ingesta calórica y ganar masa muscular.",
        bmiDescNormal: "¡Peso saludable! Mantenga hábitos saludables.",
        bmiDescOverweight: "Considere aumentar la actividad física y ajustar la dieta.",
        bmiDescObesity1: "Se recomienda consultar a un profesional de la salud.",
        bmiDescObesity2: "Busque orientación médica para un plan seguro.",
        bmiDescObesity3: "La orientación médica es esencial para su salud."
    },
    
    fr: {
        // Interface
        appName: "FitTrack",
        
        // Header
        streakLabel: "Série de jours",
        heightLabel: "Taille",
        
        // Home Tab
        completionText: "Complétez votre profil pour recevoir des entraînements personnalisés !",
        completeProfileText: "Compléter le Profil",
        editProfileText: "Modifier le Profil",
        myWorkoutText: "Mon Entraînement",
        waterText: "Eau",
        timerText: "Minuteur",
        recommendedWorkoutTitle: "Entraînement Recommandé",
        seeAllText: "Voir tout",
        completeProfileMessage: "Complétez votre profil pour voir votre entraînement personnalisé",
        todaysExercisesTitle: "Exercices du Jour",
        yourSummaryTitle: "Votre Résumé",
        editText: "Modifier",
        ageLabel: "Âge",
        weightLabel: "Poids",
        heightLabel2: "Taille",
        
        // Profile Tab
        myProfileTitle: "Mon Profil",
        fullNameLabel: "Nom Complet",
        ageLabelForm: "Âge",
        yearsText: "ans",
        weightLabelForm: "Poids",
        kgText: "kg",
        heightLabelForm: "Taille",
        cmText: "cm",
        genderLabel: "Genre",
        maleOption: "Masculin",
        femaleOption: "Féminin",
        otherOption: "Autre",
        preferNotOption: "Préfère ne pas dire",
        activityLevelLabel: "Niveau d'Activité",
        sedentaryOption: "Sédentaire (peu ou pas d'exercice)",
        lightOption: "Légèrement actif (exercice léger 1-3 jours/semaine)",
        moderateOption: "Modérément actif (exercice modéré 3-5 jours/semaine)",
        activeOption: "Très actif (exercice intense 6-7 jours/semaine)",
        veryActiveOption: "Extrêmement actif (exercice très intense ou travail physique)",
        mainGoalLabel: "Objectif Principal",
        weightLossOption: "Perte de poids",
        muscleGainOption: "Prise de muscle",
        maintenanceOption: "Maintien",
        enduranceOption: "Améliorer l'endurance",
        healthOption: "Santé générale",
        saveProfileText: "Sauvegarder le Profil",
        clearDataText: "Effacer les Données",
        
        // Training Tab
        personalizedTrainingTitle: "Entraînement Personnalisé",
        recommendedExercisesTitle: "Exercices Recommandés",
        planBeginner: "Plan Débutant",
        planIntermediate: "Plan Intermédiaire",
        planAdvanced: "Plan Avancé",
        planWeightLoss: "Plan Perte de Poids",
        planMuscleGain: "Plan Hypertrophie",
        
        // Exercises Tab
        exerciseLibraryTitle: "Bibliothèque d'Exercices",
        
        // Progress Tab
        progressTitle: "Votre Progrès",
        weightHistoryTitle: "Historique du Poids",
        bmiCalculatorTitle: "Calculateur d'IMC",
        bmiWeightLabel: "Poids (kg)",
        bmiHeightLabel: "Taille (cm)",
        calculateBmiText: "Calculer IMC",
        recentActivityTitle: "Activité Récente",
        
        // Settings Tab
        settingsTitle: "Paramètres",
        languageSettingsTitle: "Langue / Language",
        languageSettingsDesc: "Changer la langue de l'application",
        supportSettingsTitle: "Soutenir l'App",
        supportSettingsDesc: "Aidez à garder l'application gratuite",
        notificationsTitle: "Notifications",
        notificationsDesc: "Rappels d'exercice et d'eau",
        privacyTitle: "Confidentialité",
        privacyDesc: "Vos données sont sécurisées localement",
        aboutTitle: "À propos de l'App",
        aboutDesc: "FitTrack v1.0 - Coach Personnel Gratuit",
        dataManagementTitle: "Gestion des Données",
        dataManagementDesc: "Toutes vos données sont stockées localement sur votre appareil. Elles ne sont jamais envoyées à des serveurs externes.",
        exportDataText: "Exporter les Données",
        importDataText: "Importer les Données",
        clearAllDataText: "Effacer Toutes les Données",
        
        // Navigation
        homeNavText: "Accueil",
        profileNavText: "Profil",
        trainingNavText: "Entraînement",
        exercisesNavText: "Exercices",
        progressNavText: "Progrès",
        settingsNavText: "Param",
        
        // Support
        supportText: "Soutenir l'App",
        supportModalTitle: "Soutenir FitTrack",
        supportMessage1: "FitTrack est une application gratuite développée avec passion pour aider les gens à améliorer leur santé et leur condition physique.",
        supportMessage2: "Si vous avez trouvé de la valeur dans l'application et souhaitez soutenir son développement et sa maintenance, envisagez de faire une contribution.",
        supportWhyTitle: "Pourquoi soutenir?",
        supportReason1: "Garder l'application gratuite pour tous",
        supportReason2: "Développer de nouvelles fonctionnalités et exercices",
        supportReason3: "Améliorer l'expérience utilisateur",
        supportReason4: "Maintenir les serveurs en fonctionnement",
        buyCoffeeTitle: "Buy Me a Coffee",
        buyCoffeeDesc: "Soutien unique (à partir de €3)",
        shareAppTitle: "Partager l'App",
        shareAppDesc: "Aidez d'autres personnes à la découvrir",
        feedbackTitle: "Donner des Retours",
        feedbackDesc: "Suggestions d'améliorations",
        supportThankYou: "Merci d'utiliser FitTrack ! Votre santé est notre priorité.",
        
        // Water Tracker
        waterTrackerTitle: "Suivi d'Hydratation",
        waterDailyGoal: "Objectif quotidien d'eau",
        add250mlText: "Ajouter 250ml",
        resetTodayText: "Réinitialiser Aujourd'hui",
        consumedLabel: "Consommé",
        remainingLabel: "Restant",
        completeLabel: "Complet",
        
        // Timer
        timerTitle: "Minuteur d'Exercice",
        
        // BMI Categories
        bmiUnderweight: "Insuffisance pondérale",
        bmiNormal: "Poids normal",
        bmiOverweight: "Surpoids",
        bmiObesity1: "Obésité Classe I",
        bmiObesity2: "Obésité Classe II",
        bmiObesity3: "Obésité Classe III",
        
        // Exercise Categories
        cardio: "Cardio",
        strength: "Force",
        flexibility: "Flexibilité",
        balance: "Équilibre",
        
        // Difficulty Levels
        beginner: "Débutant",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
        
        // Exercise Details
        exerciseInfo: "Informations sur l'Exercice",
        instructionsText: "Instructions",
        tipsText: "Conseils",
        setsText: "Séries",
        repsText: "Répétitions",
        restText: "Repos",
        caloriesText: "Calories",
        startExerciseText: "Commencer l'Exercice",
        noInstructions: "Pas d'instructions disponibles",
        
        // Messages
        profileSaved: "Profil sauvegardé avec succès !",
        profileCleared: "Profil effacé avec succès !",
        dataExported: "Données exportées avec succès !",
        dataImported: "Données importées avec succès !",
        dataCleared: "Toutes les données ont été effacées !",
        waterAdded: "250ml d'eau ajoutés !",
        waterReset: "Eau réinitialisée pour aujourd'hui !",
        exerciseStarted: "Exercice commencé !",
        exerciseCompleted: "Exercice terminé !",
        bmiCalculated: "IMC calculé !",
        timerComplete: "Minuteur terminé !",
        
        // Errors
        errorRequiredFields: "Veuillez remplir tous les champs requis !",
        errorInvalidData: "Données invalides !",
        errorImportFailed: "Échec de l'importation des données !",
        errorExportFailed: "Échec de l'exportation des données !",
        
        // Exercise Names (Complètement traduit)
        exerciseWalking: "Marche",
        exerciseSeatedMarching: "Marche Assise",
        exerciseArmRaises: "Élévation des Bras",
        exerciseAnkleCircles: "Cercles de Cheville",
        exerciseLegLiftsSeated: "Élévation des Jambes Assis",
        exerciseDeepBreathing: "Respiration Profonde",
        exerciseChairRaises: "Lever de Chaise",
        exerciseArmStretches: "Étirement des Bras",
        exerciseAnklePumps: "Pompage des Chevilles",
        exerciseNeckRolls: "Rotation du Cou",
        exerciseKneeExtensions: "Extension des Genoux",
        exercisePushups: "Pompes",
        exerciseSquats: "Squats",
        exercisePlank: "Planche",
        exerciseLunges: "Fentes",
        exerciseJumpingJacks: "Jumping Jacks",
        exerciseBurpees: "Burpees",
        exerciseMountainClimbers: "Grimpeurs",
        exerciseBicycleCrunches: "Crunchs Bicycle",
        exerciseLegRaises: "Élévations de Jambes",
        exerciseGluteBridge: "Pont Fessier",
        exerciseSuperman: "Superman",
        exerciseBirdDog: "Chien-Oiseau",
        exerciseArmCircles: "Cercles avec Bras",
        exerciseTricepDips: "Dips Triceps",
        exerciseHighKnees: "Genoux Hauts",
        exerciseButtKicks: "Talons-Fesses",
        exerciseWallSit: "Chaise contre Mur",
        exerciseCalfRaises: "Élévations de Mollets",
        exerciseRussianTwists: "Twists Russes",
        exerciseDeadBug: "Insecte Mort",
        
        // Exercise Descriptions (Complètement traduit)
        descWalking: "Marche rapide pour santé cardiovasculaire",
        descSeatedMarching: "Marcher sur place en position assise",
        descArmRaises: "Élévation douce des bras jusqu'à hauteur d'épaules",
        descAnkleCircles: "Cercles de cheville pour améliorer la circulation",
        descLegLiftsSeated: "Élévation des jambes en position assise",
        descDeepBreathing: "Exercices de respiration profonde pour relaxation",
        descChairRaises: "Se lever et s'asseoir d'une chaise",
        descArmStretches: "Étirement doux des bras",
        descAnklePumps: "Pompage des chevilles en position assise",
        descNeckRolls: "Rotation douce du cou",
        descKneeExtensions: "Extension des genoux en position assise",
        descPushups: "Renforce poitrine, épaules et triceps",
        descSquats: "Travaille jambes et fessiers",
        descPlank: "Renforce core et abdos",
        descLunges: "Améliore équilibre et force des jambes",
        descJumpingJacks: "Exercice cardiovasculaire complet",
        descBurpees: "Exercice full-body haute intensité",
        descMountainClimbers: "Cardio qui travaille core et jambes",
        descBicycleCrunches: "Abdos qui travaillent obliques",
        descLegRaises: "Renforce bas des abdos",
        descGluteBridge: "Active et renforce fessiers",
        descSuperman: "Renforce dos et lombaires",
        descBirdDog: "Améliore équilibre et stabilité",
        descArmCircles: "Échauffe épaules et améliore mobilité",
        descTricepDips: "Renforce triceps avec poids du corps",
        descHighKnees: "Cardio qui élève fréquence cardiaque",
        descButtKicks: "Échauffement pour jambes et fessiers",
        descWallSit: "Isométrie pour renforcer quadriceps",
        descCalfRaises: "Renforce mollets",
        descRussianTwists: "Travaille obliques et core rotationnel",
        descDeadBug: "Exercice de core à faible impact",
        
        // Exercise Instructions (Complètement traduit)
        instructionsPushups: "1. Position de planche avec mains largeur épaules\n2. Gardez corps droit comme une planche\n3. Pliez coudes jusqu'à ce que poitrine touche presque le sol\n4. Poussez pour revenir position initiale\n5. Gardez core engagé pendant tout le mouvement",
        instructionsSquats: "1. Pieds largeur épaules\n2. Gardez dos droit et poitrine ouverte\n3. Pliez genoux comme pour s'asseoir\n4. Descendez jusqu'à cuisses parallèles au sol\n5. Remontez en poussant sur les talons",
        instructionsPlank: "1. Appui sur avant-bras et orteils\n2. Gardez corps droit de la tête aux pieds\n3. Contractez abdos et fessiers\n4. Ne laissez pas hanches monter ou descendre\n5. Maintenez respiration constante",
        instructionsLunges: "1. Debout avec pieds joints\n2. Faites un pas en avant avec la jambe droite\n3. Abaissez jusqu'à ce que les deux genoux soient à 90 degrés\n4. Gardez genou avant au-dessus de la cheville\n5. Poussez pour revenir à la position initiale",
        instructionsJumpingJacks: "1. Tenez-vous debout avec pieds joints et bras le long du corps\n2. Sautez en écartant les jambes largeur épaules\n3. Levez simultanément les bras au-dessus de la tête\n4. Sautez pour revenir à la position initiale\n5. Répétez rythmiquement",
        instructionsBurpees: "1. Commencez en position debout\n2. Descendez en position de squat\n3. Lancez pieds en arrière en position de planche\n4. Faites une pompe (optionnel)\n5. Sautez pieds en avant en squat\n6. Explosez vers le haut avec un saut",
        instructionsGluteBridge: "1. Allongez-vous sur le dos avec genoux pliés\n2. Pieds à plat sur le sol largeur des hanches\n3. Levez hanches vers le plafond\n4. Serrez fessiers au sommet\n5. Abaissez avec contrôle",
        
        // Exercise Tips (Complètement traduit)
        tipsPushups: "• Gardez coudes près du corps\n• Ne laissez pas hanches s'affaisser\n• Inspirez à la descente, expirez à la montée\n• Commencez par variations plus faciles si nécessaire",
        tipsSquats: "• Gardez genoux alignés avec pieds\n• Regardez devant pour garder colonne droite\n• Ne courbez pas le dos\n• Utilisez amplitude complète de mouvement",
        tipsPlank: "• Ne retenez pas votre souffle\n• Distribuez poids équitablement\n• Commencez par intervalles courts et augmentez progressivement\n• Utilisez un miroir pour vérifier alignement",
        tipsLunges: "• Ne laissez pas genou avant dépasser les orteils\n• Gardez torse droit\n• Engagez core pour équilibre\n• Alternez les jambes",
        
        // Privacy Modal
        privacyModalTitle: "Politique de Confidentialité",
        privacySection1: "Stockage des Données",
        privacyText1: "Toutes les données de l'application sont stockées localement sur votre appareil en utilisant localStorage. Aucune information personnelle n'est envoyée à des serveurs externes ou partagée avec des tiers.",
        privacySection2: "Données Collectées",
        privacyText2: "L'application collecte uniquement les informations que vous fournissez volontairement dans le profil : nom, âge, poids, taille, genre, niveau d'activité et objectifs. Ces données sont utilisées exclusivement pour générer des entraînements personnalisés et suivre vos progrès.",
        privacySection3: "Permissions",
        privacyText3: "L'application ne nécessite pas de permissions spéciales de l'appareil. Elle fonctionne entièrement hors ligne après le chargement initial.",
        privacySection4: "Sauvegarde des Données",
        privacyText4: "Vous pouvez exporter vos données vers un fichier JSON pour sauvegarde. La sauvegarde est stockée uniquement sur votre appareil et vous êtes responsable de sa sécurité.",
        
        // About Modal
        aboutModalTitle: "À propos de FitTrack",
        aboutAppDesc: "Coach Personnel Gratuit",
        aboutFeaturesTitle: "Caractéristiques Principales",
        aboutFeature1: "Profil de santé personnalisé",
        aboutFeature2: "Entraînements adaptés à votre IMC",
        aboutFeature3: "Suivi d'hydratation",
        aboutFeature4: "Minuteur d'exercices",
        aboutFeature5: "Suivi des progrès",
        aboutFeature6: "Système de sauvegarde et restauration",
        aboutFeature7: "Support pour 5 langues",
        aboutCreditsTitle: "Crédits",
        aboutCreditsText: "Développé par UniversusSoft avec ❤️",
        aboutContactText: "Contact : support@universussoft.com",
        aboutDisclaimer: "Cette application est fournie gratuitement. Les informations de santé sont à des fins éducatives uniquement. Consultez un professionnel de santé avant de commencer tout programme d'exercice.",
        
        // Export/Import Modals
        exportModalTitle: "Exporter les Données",
        exportDescription: "Vos données seront exportées au format JSON. Sauvegardez ce fichier dans un endroit sûr.",
        previewTitle: "Aperçu des Données",
        downloadText: "Télécharger le Fichier",
        copyText: "Copier dans le Presse-papier",
        importModalTitle: "Importer les Données",
        importDescription: "Sélectionnez un fichier JSON de sauvegarde pour importer vos données. Cela remplacera toutes les données actuelles.",
        selectFileText: "Sélectionner le Fichier",
        pasteDataTitle: "Ou collez les données JSON :",
        importConfirmText: "Importer les Données",
        validateText: "Valider le Fichier",
        
        // Clear Modal
        clearModalTitle: "Confirmer l'Effacement des Données",
        clearWarningText: "Attention ! Cette action supprimera toutes vos données de l'application.",
        whatWillBeDeleted: "Ce qui sera supprimé :",
        clearItem1: "Votre profil complet",
        clearItem2: "Historique des exercices",
        clearItem3: "Progrès et statistiques",
        clearItem4: "Objectifs d'eau",
        clearItem5: "Préférences de l'application",
        clearIrreversible: "Cette action ne peut pas être annulée !",
        clearEverythingText: "Tout Supprimer",
        cancelText: "Annuler",
        backupAdvice: "Assurez-vous d'avoir sauvegardé vos données avant de continuer.",
        
        // Language Modal
        languageModalTitle: "Sélectionner la Langue",
        portugueseOption: "Portugais",
        englishOption: "Anglais",
        spanishOption: "Espagnol",
        frenchOption: "Français",
        germanOption: "Allemand",
        
        // Other UI Texts
        daysText: "Jours/semaine",
        minutesText: "Minutes",
        today: "Aujourd'hui",
        yesterday: "Hier",
        linkCopied: "Lien copié dans le presse-papier !",
        copiedToClipboard: "Copié dans le presse-papier !",
        noWeightData: "Pas de données de poids encore",
        noActivityData: "Pas de données d'activité encore",
        noExercisesToday: "Pas d'exercices pour aujourd'hui",
        completeProfileFirst: "Complétez votre profil d'abord",
        notificationsComingSoon: "Notifications à venir !",
        validFile: "Fichier valide !",
        importVersionWarning: "Cette sauvegarde est d'une version différente. Continuer ?",
        importConfirmWarning: "Cela remplacera toutes les données actuelles. Continuer ?",
        
        // BMI Descriptions
        bmiDescUnderweight: "Envisagez d'augmenter l'apport calorique et de gagner de la masse musculaire.",
        bmiDescNormal: "Poids sain ! Maintenez des habitudes saines.",
        bmiDescOverweight: "Envisagez d'augmenter l'activité physique et d'ajuster le régime.",
        bmiDescObesity1: "Il est recommandé de consulter un professionnel de santé.",
        bmiDescObesity2: "Cherchez des conseils médicaux pour un plan sûr.",
        bmiDescObesity3: "L'orientation médicale est essentielle pour votre santé."
    },
    
    de: {
        // Interface
        appName: "FitTrack",
        
        // Header
        streakLabel: "Tage in Folge",
        heightLabel: "Größe",
        
        // Home Tab
        completionText: "Vervollständigen Sie Ihr Profil, um personalisierte Workouts zu erhalten!",
        completeProfileText: "Profil vervollständigen",
        editProfileText: "Profil bearbeiten",
        myWorkoutText: "Mein Training",
        waterText: "Wasser",
        timerText: "Timer",
        recommendedWorkoutTitle: "Empfohlenes Workout",
        seeAllText: "Alle anzeigen",
        completeProfileMessage: "Vervollständigen Sie Ihr Profil, um Ihr personalisiertes Training zu sehen",
        todaysExercisesTitle: "Heutige Übungen",
        yourSummaryTitle: "Ihre Zusammenfassung",
        editText: "Bearbeiten",
        ageLabel: "Alter",
        weightLabel: "Gewicht",
        heightLabel2: "Größe",
        
        // Profile Tab
        myProfileTitle: "Mein Profil",
        fullNameLabel: "Vollständiger Name",
        ageLabelForm: "Alter",
        yearsText: "Jahre",
        weightLabelForm: "Gewicht",
        kgText: "kg",
        heightLabelForm: "Größe",
        cmText: "cm",
        genderLabel: "Geschlecht",
        maleOption: "Männlich",
        femaleOption: "Weiblich",
        otherOption: "Andere",
        preferNotOption: "Möchte nicht angeben",
        activityLevelLabel: "Aktivitätslevel",
        sedentaryOption: "Sitzend (wenig oder keine Bewegung)",
        lightOption: "Leicht aktiv (leichte Bewegung 1-3 Tage/Woche)",
        moderateOption: "Mäßig aktiv (moderate Bewegung 3-5 Tage/Woche)",
        activeOption: "Sehr aktiv (harte Bewegung 6-7 Tage/Woche)",
        veryActiveOption: "Extrem aktiv (sehr harte Bewegung oder körperliche Arbeit)",
        mainGoalLabel: "Hauptziel",
        weightLossOption: "Gewichtsverlust",
        muscleGainOption: "Muskelaufbau",
        maintenanceOption: "Erhaltung",
        enduranceOption: "Ausdauer verbessern",
        healthOption: "Allgemeine Gesundheit",
        saveProfileText: "Profil speichern",
        clearDataText: "Daten löschen",
        
        // Training Tab
        personalizedTrainingTitle: "Personalisiertes Training",
        recommendedExercisesTitle: "Empfohlene Übungen",
        planBeginner: "Anfängerplan",
        planIntermediate: "Fortgeschrittenenplan",
        planAdvanced: "Expertenplan",
        planWeightLoss: "Gewichtsverlustplan",
        planMuscleGain: "Muskelaufbauplan",
        
        // Exercises Tab
        exerciseLibraryTitle: "Übungsbibliothek",
        
        // Progress Tab
        progressTitle: "Ihr Fortschritt",
        weightHistoryTitle: "Gewichtsverlauf",
        bmiCalculatorTitle: "BMI-Rechner",
        bmiWeightLabel: "Gewicht (kg)",
        bmiHeightLabel: "Größe (cm)",
        calculateBmiText: "BMI berechnen",
        recentActivityTitle: "Aktuelle Aktivität",
        
        // Settings Tab
        settingsTitle: "Einstellungen",
        languageSettingsTitle: "Sprache / Language",
        languageSettingsDesc: "Anwendungssprache ändern",
        supportSettingsTitle: "App unterstützen",
        supportSettingsDesc: "Helfen Sie, die App kostenlos zu halten",
        notificationsTitle: "Benachrichtigungen",
        notificationsDesc: "Erinnerungen für Übungen und Wasser",
        privacyTitle: "Datenschutz",
        privacyDesc: "Ihre Daten sind lokal sicher gespeichert",
        aboutTitle: "Über die App",
        aboutDesc: "FitTrack v1.0 - Kostenloser Personal Trainer",
        dataManagementTitle: "Datenverwaltung",
        dataManagementDesc: "Alle Ihre Daten werden lokal auf Ihrem Gerät gespeichert. Sie werden niemals an externe Server gesendet.",
        exportDataText: "Daten exportieren",
        importDataText: "Daten importieren",
        clearAllDataText: "Alle Daten löschen",
        
        // Navigation
        homeNavText: "Start",
        profileNavText: "Profil",
        trainingNavText: "Training",
        exercisesNavText: "Übungen",
        progressNavText: "Fortschritt",
        settingsNavText: "Einst",
        
        // Support
        supportText: "App unterstützen",
        supportModalTitle: "FitTrack unterstützen",
        supportMessage1: "FitTrack ist eine kostenlose App, die mit Leidenschaft entwickelt wurde, um Menschen zu helfen, ihre Gesundheit und Fitness zu verbessern.",
        supportMessage2: "Wenn Sie die App wertvoll fanden und deren Entwicklung und Wartung unterstützen möchten, erwägen Sie einen Beitrag.",
        supportWhyTitle: "Warum unterstützen?",
        supportReason1: "App kostenlos für alle halten",
        supportReason2: "Neue Funktionen und Übungen entwickeln",
        supportReason3: "Benutzererfahrung verbessern",
        supportReason4: "Server am Laufen halten",
        buyCoffeeTitle: "Buy Me a Coffee",
        buyCoffeeDesc: "Einmalige Unterstützung (ab €3)",
        shareAppTitle: "App teilen",
        shareAppDesc: "Helfen Sie anderen, sie zu entdecken",
        feedbackTitle: "Feedback geben",
        feedbackDesc: "Verbesserungsvorschläge",
        supportThankYou: "Danke, dass Sie FitTrack nutzen! Ihre Gesundheit ist unsere Priorität.",
        
        // Water Tracker
        waterTrackerTitle: "Hydratations-Tracker",
        waterDailyGoal: "Tägliches Wasserziel",
        add250mlText: "250ml hinzufügen",
        resetTodayText: "Heute zurücksetzen",
        consumedLabel: "Getrunken",
        remainingLabel: "Verbleibend",
        completeLabel: "Vollständig",
        
        // Timer
        timerTitle: "Übungs-Timer",
        
        // BMI Categories
        bmiUnderweight: "Untergewicht",
        bmiNormal: "Normalgewicht",
        bmiOverweight: "Übergewicht",
        bmiObesity1: "Adipositas Grad I",
        bmiObesity2: "Adipositas Grad II",
        bmiObesity3: "Adipositas Grad III",
        
        // Exercise Categories
        cardio: "Cardio",
        strength: "Kraft",
        flexibility: "Flexibilität",
        balance: "Gleichgewicht",
        
        // Difficulty Levels
        beginner: "Anfänger",
        intermediate: "Fortgeschritten",
        advanced: "Experte",
        
        // Exercise Details
        exerciseInfo: "Übungsinformationen",
        instructionsText: "Anleitung",
        tipsText: "Tipps",
        setsText: "Sätze",
        repsText: "Wiederholungen",
        restText: "Pause",
        caloriesText: "Kalorien",
        startExerciseText: "Übung starten",
        noInstructions: "Keine Anleitung verfügbar",
        
        // Messages
        profileSaved: "Profil erfolgreich gespeichert!",
        profileCleared: "Profil erfolgreich gelöscht!",
        dataExported: "Daten erfolgreich exportiert!",
        dataImported: "Daten erfolgreich importiert!",
        dataCleared: "Alle Daten wurden gelöscht!",
        waterAdded: "250ml Wasser hinzugefügt!",
        waterReset: "Wasser für heute zurückgesetzt!",
        exerciseStarted: "Übung gestartet!",
        exerciseCompleted: "Übung abgeschlossen!",
        bmiCalculated: "BMI berechnet!",
        timerComplete: "Timer abgeschlossen!",
        
        // Errors
        errorRequiredFields: "Bitte füllen Sie alle erforderlichen Felder aus!",
        errorInvalidData: "Ungültige Daten!",
        errorImportFailed: "Datenimport fehlgeschlagen!",
        errorExportFailed: "Datenexport fehlgeschlagen!",
        
        // Exercise Names (Vollständig übersetzt)
        exerciseWalking: "Gehen",
        exerciseSeatedMarching: "Sitzendes Marschieren",
        exerciseArmRaises: "Armheben",
        exerciseAnkleCircles: "Knöchelkreise",
        exerciseLegLiftsSeated: "Sitzendes Beinheben",
        exerciseDeepBreathing: "Tiefes Atmen",
        exerciseChairRaises: "Stuhlaufstehen",
        exerciseArmStretches: "Armdehnungen",
        exerciseAnklePumps: "Knöchelpumpen",
        exerciseNeckRolls: "Nackenrollen",
        exerciseKneeExtensions: "Kniestrecken",
        exercisePushups: "Liegestütze",
        exerciseSquats: "Kniebeugen",
        exercisePlank: "Planke",
        exerciseLunges: "Ausfallschritte",
        exerciseJumpingJacks: "Hampelmänner",
        exerciseBurpees: "Burpees",
        exerciseMountainClimbers: "Bergsteiger",
        exerciseBicycleCrunches: "Fahrrad-Crunches",
        exerciseLegRaises: "Beinheben",
        exerciseGluteBridge: "Gesäßbrücke",
        exerciseSuperman: "Superman",
        exerciseBirdDog: "Vogel-Hund",
        exerciseArmCircles: "Armkreisen",
        exerciseTricepDips: "Trizeps-Dips",
        exerciseHighKnees: "Knieheben",
        exerciseButtKicks: "Fersen zum Gesäß",
        exerciseWallSit: "Wandsitzen",
        exerciseCalfRaises: "Wadenheben",
        exerciseRussianTwists: "Russische Drehungen",
        exerciseDeadBug: "Toter Käfer",
        
        // Exercise Descriptions (Vollständig übersetzt)
        descWalking: "Zügiges Gehen für Herz-Kreislauf-Gesundheit",
        descSeatedMarching: "Auf der Stelle marschieren im Sitzen",
        descArmRaises: "Sanftes Armheben bis Schulterhöhe",
        descAnkleCircles: "Knöchelkreise zur Verbesserung der Durchblutung",
        descLegLiftsSeated: "Beinheben im Sitzen",
        descDeepBreathing: "Tiefatmungsübungen zur Entspannung",
        descChairRaises: "Aufstehen und Hinsetzen von einem Stuhl",
        descArmStretches: "Sanfte Armdehnungen",
        descAnklePumps: "Knöchelpumpen im Sitzen",
        descNeckRolls: "Sanfte Nackenrollen",
        descKneeExtensions: "Kniestrecken im Sitzen",
        descPushups: "Stärkt Brust, Schultern und Trizeps",
        descSquats: "Trainiert Beine und Gesäß",
        descPlank: "Stärkt Core und Bauchmuskeln",
        descLunges: "Verbessert Gleichgewicht und Beinkraft",
        descJumpingJacks: "Komplette Herz-Kreislauf-Übung",
        descBurpees: "Ganzkörper-Hochintensitätsübung",
        descMountainClimbers: "Cardio, das Core und Beine trainiert",
        descBicycleCrunches: "Bauchübung für schräge Bauchmuskeln",
        descLegRaises: "Stärkt untere Bauchmuskeln",
        descGluteBridge: "Aktiviert und stärkt Gesäßmuskeln",
        descSuperman: "Stärkt Rücken und unteren Rücken",
        descBirdDog: "Verbessert Gleichgewicht und Stabilität",
        descArmCircles: "Erwärmt Schultern und verbessert Mobilität",
        descTricepDips: "Stärkt Trizeps mit Körpergewicht",
        descHighKnees: "Cardio, das Herzfrequenz erhöht",
        descButtKicks: "Aufwärmen für Beine und Gesäß",
        descWallSit: "Isometrie zur Stärkung der Oberschenkel",
        descCalfRaises: "Stärkt Waden",
        descRussianTwists: "Trainiert schräge Bauchmuskeln und rotierenden Core",
        descDeadBug: "Gelenkschonende Core-Übung",
        
        // Exercise Instructions (Vollständig übersetzt)
        instructionsPushups: "1. Plankenposition mit Händen schulterbreit\n2. Halten Sie Körper gerade wie ein Brett\n3. Beugen Sie Ellbogen, bis Brust fast Boden berührt\n4. Drücken Sie zurück in Ausgangsposition\n5. Halten Sie Core während der gesamten Bewegung angespannt",
        instructionsSquats: "1. Füße schulterbreit auseinander\n2. Halten Sie Rücken gerade und Brust heraus\n3. Beugen Sie Knie, als würden Sie sich hinsetzen\n4. Senken Sie, bis Oberschenkel parallel zum Boden sind\n5. Kehren Sie durch Fersendruck zur Startposition zurück",
        instructionsPlank: "1. Stützen Sie sich auf Unterarmen und Zehen\n2. Halten Sie Körper von Kopf bis Fuß gerade\n3. Spannen Sie Bauch und Gesäß an\n4. Lassen Sie Hüften nicht ansteigen oder absinken\n5. Halten Sie gleichmäßige Atmung",
        instructionsLunges: "1. Stehen Sie mit geschlossenen Füßen\n2. Machen Sie einen Schritt nach vorne mit dem rechten Bein\n3. Senken Sie, bis beide Knie 90 Grad haben\n4. Halten Sie vorderes Knie über dem Knöchel\n5. Drücken Sie zurück in Ausgangsposition",
        instructionsJumpingJacks: "1. Stehen Sie mit geschlossenen Füßen und Armen an den Seiten\n2. Springen Sie und spreizen Sie Beine schulterbreit\n3. Heben Sie gleichzeitig Arme über den Kopf\n4. Springen Sie zurück in Ausgangsposition\n5. Wiederholen Sie rhythmisch",
        instructionsBurpees: "1. Beginnen Sie in stehender Position\n2. Gehen Sie in Kniebeugeposition\n3. Stoßen Sie Füße nach hinten in Plankenposition\n4. Machen Sie einen Liegestütz (optional)\n5. Springen Sie Füße zurück in Kniebeuge\n6. Explodieren Sie nach oben mit einem Sprung",
        instructionsGluteBridge: "1. Legen Sie sich auf den Rücken mit gebeugten Knien\n2. Füße flach auf dem Boden hüftbreit auseinander\n3. Heben Sie Hüften zur Decke\n4. Drücken Sie Gesäß am höchsten Punkt zusammen\n5. Senken Sie mit Kontrolle",
        
        // Exercise Tips (Vollständig übersetzt)
        tipsPushups: "• Halten Sie Ellbogen nah am Körper\n• Lassen Sie Hüften nicht durchhängen\n• Atmen Sie beim Absenken ein, beim Hochdrücken aus\n• Beginnen Sie bei Bedarf mit einfacheren Variationen",
        tipsSquats: "• Halten Sie Knie in Linie mit Füßen\n• Schauen Sie nach vorne, um Wirbelsäule gerade zu halten\n• Krümmen Sie nicht den Rücken\n• Nutzen Sie vollen Bewegungsumfang",
        tipsPlank: "• Halten Sie nicht den Atem an\n• Verteilen Sie Gewicht gleichmäßig\n• Beginnen Sie mit kurzen Intervallen und steigern Sie allmählich\n• Verwenden Sie Spiegel zur Überprüfung der Ausrichtung",
        tipsLunges: "• Lassen Sie vorderes Knie nicht über Zehen gehen\n• Halten Sie Oberkörper aufrecht\n• Engagieren Sie Core für Gleichgewicht\n• Wechseln Sie Beine ab",
        
        // Privacy Modal
        privacyModalTitle: "Datenschutzerklärung",
        privacySection1: "Datenspeicherung",
        privacyText1: "Alle App-Daten werden lokal auf Ihrem Gerät mit localStorage gespeichert. Keine persönlichen Informationen werden an externe Server gesendet oder mit Dritten geteilt.",
        privacySection2: "Erhobene Daten",
        privacyText2: "Die App sammelt nur die Informationen, die Sie freiwillig im Profil angeben: Name, Alter, Gewicht, Größe, Geschlecht, Aktivitätslevel und Ziele. Diese Daten werden ausschließlich verwendet, um personalisierte Workouts zu generieren und Ihren Fortschritt zu verfolgen.",
        privacySection3: "Berechtigungen",
        privacyText3: "Die App benötigt keine speziellen Geräteberechtigungen. Sie funktioniert nach dem ersten Laden vollständig offline.",
        privacySection4: "Daten-Backup",
        privacyText4: "Sie können Ihre Daten zur Sicherung in eine JSON-Datei exportieren. Das Backup wird nur auf Ihrem Gerät gespeichert und Sie sind für dessen Sicherheit verantwortlich.",
        
        // About Modal
        aboutModalTitle: "Über FitTrack",
        aboutAppDesc: "Kostenloser Personal Trainer",
        aboutFeaturesTitle: "Hauptfunktionen",
        aboutFeature1: "Personalisiertes Gesundheitsprofil",
        aboutFeature2: "An Ihren BMI angepasste Workouts",
        aboutFeature3: "Hydratations-Tracking",
        aboutFeature4: "Übungs-Timer",
        aboutFeature5: "Fortschrittsverfolgung",
        aboutFeature6: "Backup- und Wiederherstellungssystem",
        aboutFeature7: "Unterstützung für 5 Sprachen",
        aboutCreditsTitle: "Credits",
        aboutCreditsText: "Entwickelt von UniversusSoft mit ❤️",
        aboutContactText: "Kontakt: support@universussoft.com",
        aboutDisclaimer: "Diese App wird kostenlos bereitgestellt. Gesundheitsinformationen dienen nur zu Bildungszwecken. Konsultieren Sie einen Fachmann für Gesundheitswesen, bevor Sie mit einem Trainingsprogramm beginnen.",
        
        // Export/Import Modals
        exportModalTitle: "Daten exportieren",
        exportDescription: "Ihre Daten werden im JSON-Format exportiert. Speichern Sie diese Datei an einem sicheren Ort zur Sicherung.",
        previewTitle: "Datenvorschau",
        downloadText: "Datei herunterladen",
        copyText: "In Zwischenablage kopieren",
        importModalTitle: "Daten importieren",
        importDescription: "Wählen Sie eine JSON-Backup-Datei, um Ihre Daten zu importieren. Dies ersetzt alle aktuellen Daten.",
        selectFileText: "Datei auswählen",
        pasteDataTitle: "Oder fügen Sie JSON-Daten ein:",
        importConfirmText: "Daten importieren",
        validateText: "Datei validieren",
        
        // Clear Modal
        clearModalTitle: "Datenlöschung bestätigen",
        clearWarningText: "Achtung! Diese Aktion löscht alle Ihre App-Daten.",
        whatWillBeDeleted: "Was gelöscht wird:",
        clearItem1: "Ihr vollständiges Profil",
        clearItem2: "Übungsverlauf",
        clearItem3: "Fortschritt und Statistiken",
        clearItem4: "Wasserziele",
        clearItem5: "App-Einstellungen",
        clearIrreversible: "Diese Aktion kann nicht rückgängig gemacht werden!",
        clearEverythingText: "Alles löschen",
        cancelText: "Abbrechen",
        backupAdvice: "Stellen Sie sicher, dass Sie Ihre Daten gesichert haben, bevor Sie fortfahren.",
        
        // Language Modal
        languageModalTitle: "Sprache auswählen",
        portugueseOption: "Portugiesisch",
        englishOption: "Englisch",
        spanishOption: "Spanisch",
        frenchOption: "Französisch",
        germanOption: "Deutsch",
        
        // Other UI Texts
        daysText: "Tage/Woche",
        minutesText: "Minuten",
        today: "Heute",
        yesterday: "Gestern",
        linkCopied: "Link in Zwischenablage kopiert!",
        copiedToClipboard: "In Zwischenablage kopiert!",
        noWeightData: "Noch keine Gewichtsdaten",
        noActivityData: "Noch keine Aktivitätsdaten",
        noExercisesToday: "Keine Übungen für heute",
        completeProfileFirst: "Vervollständigen Sie zuerst Ihr Profil",
        notificationsComingSoon: "Benachrichtigungen in Kürze!",
        validFile: "Gültige Datei!",
        importVersionWarning: "Dieses Backup ist von einer anderen Version. Fortfahren?",
        importConfirmWarning: "Dies ersetzt alle aktuellen Daten. Fortfahren?",
        
        // BMI Descriptions
        bmiDescUnderweight: "Erwägen Sie, die Kalorienzufuhr zu erhöhen und Muskelmasse aufzubauen.",
        bmiDescNormal: "Gesundes Gewicht! Behalten Sie gesunde Gewohnheiten bei.",
        bmiDescOverweight: "Erwägen Sie, körperliche Aktivität zu erhöhen und die Ernährung anzupassen.",
        bmiDescObesity1: "Es wird empfohlen, einen Arzt zu konsultieren.",
        bmiDescObesity2: "Suchen Sie medizinische Beratung für einen sicheren Plan.",
        bmiDescObesity3: "Medizinische Beratung ist für Ihre Gesundheit unerlässlich."
    }
};

// Definição completa dos exercícios com referências às chaves de tradução
const EXERCISES_BY_BMI = {
    underweight: [
        {
            id: 1,
            nameKey: "exerciseSquats",
            descriptionKey: "descSquats",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "10-12",
            rest: "60s",
            calories: 50,
            icon: "fas fa-weight",
            instructionsKey: "instructionsSquats",
            tipsKey: "tipsSquats"
        },
        {
            id: 2,
            nameKey: "exercisePushups",
            descriptionKey: "descPushups",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "8-10",
            rest: "60s",
            calories: 40,
            icon: "fas fa-hand-rock",
            instructionsKey: "instructionsPushups",
            tipsKey: "tipsPushups"
        },
        {
            id: 3,
            nameKey: "exerciseGluteBridge",
            descriptionKey: "descGluteBridge",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "12-15",
            rest: "45s",
            calories: 35,
            icon: "fas fa-mountain",
            instructionsKey: "instructionsGluteBridge",
            tipsKey: "tipsSquats" // Reusing general tips
        },
        {
            id: 4,
            nameKey: "exerciseBirdDog",
            descriptionKey: "descBirdDog",
            categoryKey: "balance",
            difficulty: "beginner",
            sets: 3,
            reps: "10 each side",
            rest: "45s",
            calories: 25,
            icon: "fas fa-paw",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 5,
            nameKey: "exerciseHighKnees",
            descriptionKey: "descHighKnees",
            categoryKey: "cardio",
            difficulty: "beginner",
            sets: 3,
            reps: "30s",
            rest: "30s",
            calories: 45,
            icon: "fas fa-running",
            instructionsKey: "",
            tipsKey: ""
        }
    ],
    normal: [
        {
            id: 6,
            nameKey: "exerciseSquats",
            descriptionKey: "descSquats",
            categoryKey: "strength",
            difficulty: "intermediate",
            sets: 4,
            reps: "12-15",
            rest: "45s",
            calories: 60,
            icon: "fas fa-weight",
            instructionsKey: "instructionsSquats",
            tipsKey: "tipsSquats"
        },
        {
            id: 7,
            nameKey: "exercisePushups",
            descriptionKey: "descPushups",
            categoryKey: "strength",
            difficulty: "intermediate",
            sets: 4,
            reps: "10-12",
            rest: "45s",
            calories: 50,
            icon: "fas fa-hand-rock",
            instructionsKey: "instructionsPushups",
            tipsKey: "tipsPushups"
        },
        {
            id: 8,
            nameKey: "exercisePlank",
            descriptionKey: "descPlank",
            categoryKey: "strength",
            difficulty: "intermediate",
            sets: 3,
            reps: "45s",
            rest: "30s",
            calories: 30,
            icon: "fas fa-arrows-alt-h",
            instructionsKey: "instructionsPlank",
            tipsKey: "tipsPlank"
        },
        {
            id: 9,
            nameKey: "exerciseLunges",
            descriptionKey: "descLunges",
            categoryKey: "strength",
            difficulty: "intermediate",
            sets: 3,
            reps: "10 each leg",
            rest: "45s",
            calories: 55,
            icon: "fas fa-walking",
            instructionsKey: "instructionsLunges",
            tipsKey: "tipsLunges"
        },
        {
            id: 10,
            nameKey: "exerciseBurpees",
            descriptionKey: "descBurpees",
            categoryKey: "cardio",
            difficulty: "intermediate",
            sets: 3,
            reps: "8-10",
            rest: "60s",
            calories: 70,
            icon: "fas fa-fire",
            instructionsKey: "instructionsBurpees",
            tipsKey: "tipsPushups" // Reusing general tips
        }
    ],
    overweight: [
        {
            id: 11,
            nameKey: "exerciseWalking",
            descriptionKey: "descWalking",
            categoryKey: "cardio",
            difficulty: "beginner",
            sets: 1,
            reps: "20-30 min",
            rest: "0s",
            calories: 150,
            icon: "fas fa-walking",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 12,
            nameKey: "exerciseWallSit",
            descriptionKey: "descWallSit",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "30s",
            rest: "45s",
            calories: 40,
            icon: "fas fa-chair",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 13,
            nameKey: "exerciseArmCircles",
            descriptionKey: "descArmCircles",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 3,
            reps: "30s forward, 30s backward",
            rest: "30s",
            calories: 20,
            icon: "fas fa-sync-alt",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 14,
            nameKey: "exerciseCalfRaises",
            descriptionKey: "descCalfRaises",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "15-20",
            rest: "30s",
            calories: 30,
            icon: "fas fa-arrow-up",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 15,
            nameKey: "exerciseJumpingJacks",
            descriptionKey: "descJumpingJacks",
            categoryKey: "cardio",
            difficulty: "beginner",
            sets: 3,
            reps: "30s",
            rest: "45s",
            calories: 50,
            icon: "fas fa-star",
            instructionsKey: "instructionsJumpingJacks",
            tipsKey: ""
        }
    ],
    obesity1: [
        {
            id: 16,
            nameKey: "exerciseSeatedMarching",
            descriptionKey: "descSeatedMarching",
            categoryKey: "cardio",
            difficulty: "beginner",
            sets: 3,
            reps: "2 min",
            rest: "60s",
            calories: 80,
            icon: "fas fa-chair",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 17,
            nameKey: "exerciseArmRaises",
            descriptionKey: "descArmRaises",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "10-12",
            rest: "45s",
            calories: 25,
            icon: "fas fa-arrow-up",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 18,
            nameKey: "exerciseAnkleCircles",
            descriptionKey: "descAnkleCircles",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 2,
            reps: "10 each direction",
            rest: "30s",
            calories: 15,
            icon: "fas fa-circle",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 19,
            nameKey: "exerciseLegLiftsSeated",
            descriptionKey: "descLegLiftsSeated",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "8-10 each leg",
            rest: "45s",
            calories: 30,
            icon: "fas fa-arrow-up",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 20,
            nameKey: "exerciseDeepBreathing",
            descriptionKey: "descDeepBreathing",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 1,
            reps: "5 min",
            rest: "0s",
            calories: 20,
            icon: "fas fa-wind",
            instructionsKey: "",
            tipsKey: ""
        }
    ],
    obesity2: [
        {
            id: 21,
            nameKey: "exerciseChairRaises",
            descriptionKey: "descChairRaises",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "5-8",
            rest: "60s",
            calories: 40,
            icon: "fas fa-chair",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 22,
            nameKey: "exerciseArmStretches",
            descriptionKey: "descArmStretches",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 3,
            reps: "30s hold",
            rest: "30s",
            calories: 15,
            icon: "fas fa-expand-arrows-alt",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 23,
            nameKey: "exerciseAnklePumps",
            descriptionKey: "descAnklePumps",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 3,
            reps: "20 reps",
            rest: "30s",
            calories: 10,
            icon: "fas fa-shoe-prints",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 24,
            nameKey: "exerciseNeckRolls",
            descriptionKey: "descNeckRolls",
            categoryKey: "flexibility",
            difficulty: "beginner",
            sets: 2,
            reps: "5 each direction",
            rest: "30s",
            calories: 10,
            icon: "fas fa-head-side",
            instructionsKey: "",
            tipsKey: ""
        },
        {
            id: 25,
            nameKey: "exerciseKneeExtensions",
            descriptionKey: "descKneeExtensions",
            categoryKey: "strength",
            difficulty: "beginner",
            sets: 3,
            reps: "8-10 each leg",
            rest: "45s",
            calories: 25,
            icon: "fas fa-arrow-right",
            instructionsKey: "",
            tipsKey: ""
        }
    ]
};

// Definição completa da biblioteca de exercícios
const EXERCISE_LIBRARY = [
    // Cardio
    {
        id: 101,
        nameKey: "exerciseJumpingJacks",
        descriptionKey: "descJumpingJacks",
        categoryKey: "cardio",
        difficulty: "beginner",
        sets: 3,
        reps: "30s",
        rest: "30s",
        calories: 50,
        icon: "fas fa-star",
        instructionsKey: "instructionsJumpingJacks",
        tipsKey: ""
    },
    {
        id: 102,
        nameKey: "exerciseHighKnees",
        descriptionKey: "descHighKnees",
        categoryKey: "cardio",
        difficulty: "beginner",
        sets: 3,
        reps: "30s",
        rest: "30s",
        calories: 45,
        icon: "fas fa-running",
        instructionsKey: "",
        tipsKey: ""
    },
    {
        id: 103,
        nameKey: "exerciseBurpees",
        descriptionKey: "descBurpees",
        categoryKey: "cardio",
        difficulty: "intermediate",
        sets: 3,
        reps: "8-10",
        rest: "60s",
        calories: 70,
        icon: "fas fa-fire",
        instructionsKey: "instructionsBurpees",
        tipsKey: ""
    },
    {
        id: 104,
        nameKey: "exerciseMountainClimbers",
        descriptionKey: "descMountainClimbers",
        categoryKey: "cardio",
        difficulty: "intermediate",
        sets: 3,
        reps: "30s",
        rest: "45s",
        calories: 55,
        icon: "fas fa-mountain",
        instructionsKey: "",
        tipsKey: ""
    },
    // Strength
    {
        id: 201,
        nameKey: "exercisePushups",
        descriptionKey: "descPushups",
        categoryKey: "strength",
        difficulty: "beginner",
        sets: 3,
        reps: "8-12",
        rest: "60s",
        calories: 40,
        icon: "fas fa-hand-rock",
        instructionsKey: "instructionsPushups",
        tipsKey: "tipsPushups"
    },
    {
        id: 202,
        nameKey: "exerciseSquats",
        descriptionKey: "descSquats",
        categoryKey: "strength",
        difficulty: "beginner",
        sets: 3,
        reps: "10-15",
        rest: "60s",
        calories: 50,
        icon: "fas fa-weight",
        instructionsKey: "instructionsSquats",
        tipsKey: "tipsSquats"
    },
    {
        id: 203,
        nameKey: "exerciseLunges",
        descriptionKey: "descLunges",
        categoryKey: "strength",
        difficulty: "intermediate",
        sets: 3,
        reps: "10 each leg",
        rest: "45s",
        calories: 55,
        icon: "fas fa-walking",
        instructionsKey: "instructionsLunges",
        tipsKey: "tipsLunges"
    },
    {
        id: 204,
        nameKey: "exerciseTricepDips",
        descriptionKey: "descTricepDips",
        categoryKey: "strength",
        difficulty: "intermediate",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        calories: 35,
        icon: "fas fa-arrows-alt-v",
        instructionsKey: "",
        tipsKey: ""
    },
    // Core
    {
        id: 301,
        nameKey: "exercisePlank",
        descriptionKey: "descPlank",
        categoryKey: "strength",
        difficulty: "beginner",
        sets: 3,
        reps: "30-60s",
        rest: "30s",
        calories: 30,
        icon: "fas fa-arrows-alt-h",
        instructionsKey: "instructionsPlank",
        tipsKey: "tipsPlank"
    },
    {
        id: 302,
        nameKey: "exerciseBicycleCrunches",
        descriptionKey: "descBicycleCrunches",
        categoryKey: "strength",
        difficulty: "intermediate",
        sets: 3,
        reps: "15 each side",
        rest: "45s",
        calories: 40,
        icon: "fas fa-bicycle",
        instructionsKey: "",
        tipsKey: ""
    },
    {
        id: 303,
        nameKey: "exerciseLegRaises",
        descriptionKey: "descLegRaises",
        categoryKey: "strength",
        difficulty: "intermediate",
        sets: 3,
        reps: "12-15",
        rest: "45s",
        calories: 35,
        icon: "fas fa-arrow-up",
        instructionsKey: "",
        tipsKey: ""
    },
    {
        id: 304,
        nameKey: "exerciseRussianTwists",
        descriptionKey: "descRussianTwists",
        categoryKey: "strength",
        difficulty: "intermediate",
        sets: 3,
        reps: "15 each side",
        rest: "45s",
        calories: 40,
        icon: "fas fa-sync-alt",
        instructionsKey: "",
        tipsKey: ""
    },
    // Flexibility & Balance
    {
        id: 401,
        nameKey: "exerciseGluteBridge",
        descriptionKey: "descGluteBridge",
        categoryKey: "strength",
        difficulty: "beginner",
        sets: 3,
        reps: "12-15",
        rest: "45s",
        calories: 35,
        icon: "fas fa-mountain",
        instructionsKey: "instructionsGluteBridge",
        tipsKey: ""
    },
    {
        id: 402,
        nameKey: "exerciseSuperman",
        descriptionKey: "descSuperman",
        categoryKey: "strength",
        difficulty: "beginner",
        sets: 3,
        reps: "10-12",
        rest: "45s",
        calories: 30,
        icon: "fas fa-fighter-jet",
        instructionsKey: "",
        tipsKey: ""
    },
    {
        id: 403,
        nameKey: "exerciseBirdDog",
        descriptionKey: "descBirdDog",
        categoryKey: "balance",
        difficulty: "beginner",
        sets: 3,
        reps: "10 each side",
        rest: "45s",
        calories: 25,
        icon: "fas fa-paw",
        instructionsKey: "",
        tipsKey: ""
    },
    {
        id: 404,
        nameKey: "exerciseDeadBug",
        descriptionKey: "descDeadBug",
        categoryKey: "balance",
        difficulty: "intermediate",
        sets: 3,
        reps: "10 each side",
        rest: "45s",
        calories: 30,
        icon: "fas fa-bug",
        instructionsKey: "",
        tipsKey: ""
    }
];

// Sistema de armazenamento de dados
class FitnessApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('fitTrack_language') || 'pt';
        this.userProfile = JSON.parse(localStorage.getItem('fitTrack_profile')) || null;
        this.waterData = JSON.parse(localStorage.getItem('fitTrack_water')) || { date: this.getToday(), consumed: 0, goal: 2000 };
        this.exerciseHistory = JSON.parse(localStorage.getItem('fitTrack_history')) || [];
        this.weightHistory = JSON.parse(localStorage.getItem('fitTrack_weightHistory')) || [];
        this.settings = JSON.parse(localStorage.getItem('fitTrack_settings')) || { notifications: true, theme: 'light' };
        this.streak = parseInt(localStorage.getItem('fitTrack_streak')) || 0;
        this.lastLogin = localStorage.getItem('fitTrack_lastLogin') || null;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.setupEventListeners();
        this.checkLoginStreak();
        this.loadLanguage();
        this.loadUserProfile();
        this.updateUI();
        this.generateExercises();
    }
    
    // Sistema de tradução
    loadLanguage() {
        // Atualizar interface com traduções
        this.updateAllTexts();
        
        // Atualizar bandeira do idioma atual
        const flagMap = {
            'pt': '🇧🇷',
            'en': '🇺🇸',
            'es': '🇪🇸',
            'fr': '🇫🇷',
            'de': '🇩🇪'
        };
        
        const langTextMap = {
            'pt': 'PT',
            'en': 'EN',
            'es': 'ES',
            'fr': 'FR',
            'de': 'DE'
        };
        
        document.getElementById('currentFlag').textContent = flagMap[this.currentLanguage];
        document.getElementById('currentLanguage').textContent = langTextMap[this.currentLanguage];
        
        // Atualizar opções ativas no dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === this.currentLanguage) {
                option.classList.add('active');
            }
        });
    }
    
    updateAllTexts() {
        const t = TRANSLATIONS[this.currentLanguage];
        
        // Atualizar todos os textos da interface
        Object.keys(t).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('fitTrack_language', lang);
        this.loadLanguage();
        this.updateUI();
        this.generateExercises();
        this.showToast(this.translate('profileSaved'));
    }
    
    translate(key) {
        return TRANSLATIONS[this.currentLanguage][key] || key;
    }
    
    // Sistema de perfil do usuário
    loadUserProfile() {
        if (this.userProfile) {
            // Preencher formulário de perfil
            document.getElementById('name').value = this.userProfile.name || '';
            document.getElementById('age').value = this.userProfile.age || '';
            document.getElementById('weight').value = this.userProfile.weight || '';
            document.getElementById('height').value = this.userProfile.height || '';
            document.getElementById('gender').value = this.userProfile.gender || '';
            document.getElementById('activity').value = this.userProfile.activity || 'moderate';
            document.getElementById('goal').value = this.userProfile.goal || 'muscle-gain';
            
            // Atualizar contador de caracteres do nome
            this.updateNameCharCount();
            
            // Atualizar header
            this.updateHeader();
            
            // Esconder prompt de completar perfil
            document.getElementById('profileCompletion').style.display = 'none';
        } else {
            // Mostrar prompt de completar perfil
            document.getElementById('profileCompletion').style.display = 'block';
        }
    }
    
    saveProfile() {
        const name = document.getElementById('name').value.trim();
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseInt(document.getElementById('height').value);
        const gender = document.getElementById('gender').value;
        const activity = document.getElementById('activity').value;
        const goal = document.getElementById('goal').value;
        
        // Validação básica
        if (!name || !age || !weight || !height) {
            this.showToast(this.translate('errorRequiredFields'), 'error');
            return false;
        }
        
        if (name.length > 50) {
            this.showToast('Nome muito longo (máx 50 caracteres)', 'error');
            return false;
        }
        
        if (age < 10 || age > 120) {
            this.showToast('Idade deve ser entre 10 e 120 anos', 'error');
            return false;
        }
        
        if (weight < 30 || weight > 300) {
            this.showToast('Peso deve ser entre 30kg e 300kg', 'error');
            return false;
        }
        
        if (height < 100 || height > 250) {
            this.showToast('Altura deve ser entre 100cm e 250cm', 'error');
            return false;
        }
        
        // Salvar perfil
        this.userProfile = {
            name,
            age,
            weight,
            height,
            gender,
            activity,
            goal,
            bmi: this.calculateBMI(weight, height),
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem('fitTrack_profile', JSON.stringify(this.userProfile));
        
        // Adicionar ao histórico de peso
        this.addWeightEntry(weight);
        
        // Atualizar interface
        this.updateHeader();
        this.updateUI();
        this.generateExercises();
        
        // Mostrar mensagem de sucesso
        this.showToast(this.translate('profileSaved'));
        
        // Esconder prompt de completar perfil
        document.getElementById('profileCompletion').style.display = 'none';
        
        return true;
    }
    
    clearProfile() {
        if (confirm(this.translate('clearIrreversible'))) {
            this.userProfile = null;
            localStorage.removeItem('fitTrack_profile');
            this.loadUserProfile();
            this.updateUI();
            this.showToast(this.translate('profileCleared'));
        }
    }
    
    updateHeader() {
        if (!this.userProfile) return;
        
        const t = TRANSLATIONS[this.currentLanguage];
        
        // Atualizar informações do usuário no header
        document.getElementById('userName').textContent = this.userProfile.name;
        document.getElementById('userAgeWeight').textContent = `${this.userProfile.age} ${t.yearsText} • ${this.userProfile.weight}kg`;
        
        // Atualizar avatar do perfil
        document.getElementById('profileUserName').textContent = this.userProfile.name;
        document.getElementById('profileUserDetails').textContent = `${this.userProfile.age} ${t.yearsText} • ${this.userProfile.weight}kg • ${this.userProfile.height}cm`;
        
        // Atualizar estatísticas do header
        document.getElementById('streakCount').textContent = this.streak;
        document.getElementById('bmiValue').textContent = this.userProfile.bmi.toFixed(1);
        document.getElementById('userHeight').textContent = this.userProfile.height + 'cm';
        
        // Atualizar resumo na home
        document.getElementById('summaryAge').textContent = this.userProfile.age;
        document.getElementById('summaryWeight').textContent = this.userProfile.weight;
        document.getElementById('summaryHeight').textContent = this.userProfile.height;
        document.getElementById('summaryBMI').textContent = this.userProfile.bmi.toFixed(1);
    }
    
    // Sistema de cálculo de IMC
    calculateBMI(weight, height) {
        // Converter altura de cm para m
        const heightM = height / 100;
        // Calcular IMC: peso (kg) / (altura (m) * altura (m))
        return weight / (heightM * heightM);
    }
    
    getBMICategory(bmi) {
        if (bmi < 18.5) return 'underweight';
        if (bmi < 25) return 'normal';
        if (bmi < 30) return 'overweight';
        if (bmi < 35) return 'obesity1';
        if (bmi < 40) return 'obesity2';
        return 'obesity3';
    }
    
    getBMICategoryText(bmi) {
        const t = TRANSLATIONS[this.currentLanguage];
        const category = this.getBMICategory(bmi);
        
        switch(category) {
            case 'underweight': return t.bmiUnderweight;
            case 'normal': return t.bmiNormal;
            case 'overweight': return t.bmiOverweight;
            case 'obesity1': return t.bmiObesity1;
            case 'obesity2': return t.bmiObesity2;
            case 'obesity3': return t.bmiObesity3;
            default: return '';
        }
    }
    
    // Sistema de exercícios
    generateExercises() {
        if (!this.userProfile) {
            this.showPersonalizedPlanPrompt();
            this.showEmptyExercises();
            return;
        }
        
        const bmiCategory = this.getBMICategory(this.userProfile.bmi);
        const exercises = EXERCISES_BY_BMI[bmiCategory] || EXERCISES_BY_BMI.normal;
        
        // Gerar plano personalizado
        this.generatePersonalizedPlan(bmiCategory);
        
        // Gerar exercícios de hoje
        this.generateTodayExercises(exercises);
        
        // Gerar exercícios recomendados
        this.generateRecommendedExercises(exercises);
        
        // Gerar biblioteca completa
        this.generateExerciseLibrary();
    }
    
    showPersonalizedPlanPrompt() {
        const planContainer = document.getElementById('personalizedPlan');
        planContainer.innerHTML = `
            <p style="text-align: center; color: var(--gray-color);">
                ${this.translate('completeProfileMessage')}
            </p>
        `;
    }
    
    generatePersonalizedPlan(bmiCategory) {
        const planContainer = document.getElementById('personalizedPlan');
        const t = TRANSLATIONS[this.currentLanguage];
        
        let planTitle = '';
        let planDescription = '';
        let planColor = 'var(--primary-color)';
        
        switch(bmiCategory) {
            case 'underweight':
                planTitle = t.planMuscleGain;
                planDescription = 'Foco em ganho de massa muscular e força';
                planColor = '#3B82F6';
                break;
            case 'normal':
                planTitle = t.planIntermediate;
                planDescription = 'Manutenção e melhoria da condição física';
                planColor = '#10B981';
                break;
            case 'overweight':
                planTitle = t.planWeightLoss;
                planDescription = 'Emagrecimento saudável e aumento da resistência';
                planColor = '#F59E0B';
                break;
            case 'obesity1':
            case 'obesity2':
            case 'obesity3':
                planTitle = t.planBeginner;
                planDescription = 'Exercícios de baixo impacto para iniciantes';
                planColor = '#EF4444';
                break;
        }
        
        planContainer.innerHTML = `
            <div class="plan-card" style="background: linear-gradient(135deg, ${planColor}, ${planColor}99);">
                <h3 class="plan-title">${planTitle}</h3>
                <p class="plan-description">${planDescription}</p>
                <div class="plan-stats">
                    <div class="plan-stat">
                        <div class="plan-stat-value">3-4</div>
                        <div class="plan-stat-label">${this.translate('daysText')}</div>
                    </div>
                    <div class="plan-stat">
                        <div class="plan-stat-value">30-45</div>
                        <div class="plan-stat-label">${this.translate('minutesText')}</div>
                    </div>
                    <div class="plan-stat">
                        <div class="plan-stat-value">${this.getCaloriesPerWorkout(bmiCategory)}</div>
                        <div class="plan-stat-label">${this.translate('caloriesText')}</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    getCaloriesPerWorkout(bmiCategory) {
        switch(bmiCategory) {
            case 'underweight': return '150-200';
            case 'normal': return '200-300';
            case 'overweight': return '250-350';
            case 'obesity1': return '150-250';
            case 'obesity2': return '100-200';
            case 'obesity3': return '50-150';
            default: return '200-300';
        }
    }
    
    generateTodayExercises(exercises) {
        const container = document.getElementById('todaysExercises');
        const t = TRANSLATIONS[this.currentLanguage];
        
        if (!exercises || exercises.length === 0) {
            container.innerHTML = `
                <div class="exercise-item">
                    <div class="exercise-icon">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="exercise-details">
                        <div class="exercise-name">${this.translate('noExercisesToday')}</div>
                        <div class="exercise-info">${this.translate('completeProfileFirst')}</div>
                    </div>
                </div>
            `;
            return;
        }
        
        // Pegar 3 exercícios aleatórios para hoje
        const todayExercises = this.getRandomExercises(exercises, 3);
        
        container.innerHTML = todayExercises.map(exercise => `
            <div class="exercise-item" data-exercise="${exercise.id}">
                <div class="exercise-icon">
                    <i class="${exercise.icon}"></i>
                </div>
                <div class="exercise-details">
                    <div class="exercise-name">${t[exercise.nameKey] || exercise.nameKey}</div>
                    <div class="exercise-info">${t[exercise.descriptionKey] || exercise.descriptionKey}</div>
                    <span class="workout-tag">${t[exercise.categoryKey] || exercise.categoryKey}</span>
                </div>
                <div class="exercise-actions">
                    <div class="exercise-btn start-exercise" data-exercise="${exercise.id}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Adicionar event listeners para iniciar exercícios
        document.querySelectorAll('.start-exercise').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const exerciseId = parseInt(btn.dataset.exercise);
                this.startExercise(exerciseId);
            });
        });
        
        // Adicionar event listeners para ver detalhes
        document.querySelectorAll('.exercise-item[data-exercise]').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.exercise-btn')) {
                    const exerciseId = parseInt(item.dataset.exercise);
                    this.showExerciseDetail(exerciseId);
                }
            });
        });
    }
    
    generateRecommendedExercises(exercises) {
        const container = document.getElementById('recommendedExercises');
        const t = TRANSLATIONS[this.currentLanguage];
        
        container.innerHTML = exercises.map(exercise => `
            <div class="exercise-item" data-exercise="${exercise.id}">
                <div class="exercise-icon">
                    <i class="${exercise.icon}"></i>
                </div>
                <div class="exercise-details">
                    <div class="exercise-name">${t[exercise.nameKey] || exercise.nameKey}</div>
                    <div class="exercise-info">
                        ${exercise.sets} × ${exercise.reps} • ${exercise.rest} ${t.restText}
                    </div>
                    <span class="level-badge level-${exercise.difficulty}">
                        ${t[exercise.difficulty] || exercise.difficulty}
                    </span>
                </div>
                <div class="exercise-actions">
                    <div class="exercise-btn start-exercise" data-exercise="${exercise.id}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Adicionar event listeners
        this.addExerciseEventListeners();
    }
    
    generateExerciseLibrary() {
        const container = document.getElementById('exerciseLibrary');
        const t = TRANSLATIONS[this.currentLanguage];
        
        // Agrupar exercícios por categoria
        const exercisesByCategory = {};
        EXERCISE_LIBRARY.forEach(exercise => {
            const category = exercise.categoryKey;
            if (!exercisesByCategory[category]) {
                exercisesByCategory[category] = [];
            }
            exercisesByCategory[category].push(exercise);
        });
        
        let html = '';
        
        // Para cada categoria, criar uma seção
        Object.keys(exercisesByCategory).forEach(category => {
            html += `
                <div class="section-header">
                    <h4 class="section-title">${t[category] || category}</h4>
                </div>
            `;
            
            html += exercisesByCategory[category].map(exercise => `
                <div class="exercise-item" data-exercise="${exercise.id}">
                    <div class="exercise-icon">
                        <i class="${exercise.icon}"></i>
                    </div>
                    <div class="exercise-details">
                        <div class="exercise-name">${t[exercise.nameKey] || exercise.nameKey}</div>
                        <div class="exercise-info">${t[exercise.descriptionKey] || exercise.descriptionKey}</div>
                        <span class="level-badge level-${exercise.difficulty}">
                            ${t[exercise.difficulty] || exercise.difficulty}
                        </span>
                    </div>
                    <div class="exercise-actions">
                        <div class="exercise-btn" onclick="app.showExerciseDetail(${exercise.id})">
                            <i class="fas fa-info-circle"></i>
                        </div>
                    </div>
                </div>
            `).join('');
        });
        
        container.innerHTML = html;
        
        // Adicionar event listeners para os itens da biblioteca
        document.querySelectorAll('#exerciseLibrary .exercise-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.exercise-btn')) {
                    const exerciseId = parseInt(item.dataset.exercise);
                    this.showExerciseDetail(exerciseId);
                }
            });
        });
    }
    
    addExerciseEventListeners() {
        document.querySelectorAll('.start-exercise').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const exerciseId = parseInt(btn.dataset.exercise);
                this.startExercise(exerciseId);
            });
        });
        
        document.querySelectorAll('.exercise-item[data-exercise]').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.exercise-btn')) {
                    const exerciseId = parseInt(item.dataset.exercise);
                    this.showExerciseDetail(exerciseId);
                }
            });
        });
    }
    
    showEmptyExercises() {
        const containers = ['todaysExercises', 'recommendedExercises', 'trainingPlanContent'];
        containers.forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; color: var(--gray-color);">
                        <i class="fas fa-user-plus" style="font-size: 2rem; margin-bottom: 16px;"></i>
                        <p>${this.translate('completeProfileFirst')}</p>
                    </div>
                `;
            }
        });
    }
    
    getRandomExercises(exercises, count) {
        // Embaralhar array e pegar os primeiros 'count' elementos
        const shuffled = [...exercises].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Sistema de histórico de peso
    addWeightEntry(weight) {
        const today = this.getToday();
        
        // Verificar se já temos entrada para hoje
        const existingEntryIndex = this.weightHistory.findIndex(entry => entry.date === today);
        
        if (existingEntryIndex !== -1) {
            // Atualizar entrada existente
            this.weightHistory[existingEntryIndex].weight = weight;
        } else {
            // Adicionar nova entrada
            this.weightHistory.unshift({
                date: today,
                weight: weight,
                bmi: this.calculateBMI(weight, this.userProfile.height)
            });
            
            // Manter apenas as últimas 30 entradas
            if (this.weightHistory.length > 30) {
                this.weightHistory = this.weightHistory.slice(0, 30);
            }
        }
        
        localStorage.setItem('fitTrack_weightHistory', JSON.stringify(this.weightHistory));
        this.updateWeightChart();
        this.updateActivityHistory();
    }
    
    updateWeightChart() {
        const chartContainer = document.getElementById('weightChart');
        
        if (!this.weightHistory || this.weightHistory.length === 0) {
            chartContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--gray-color);">
                    ${this.translate('noWeightData')}
                </div>
            `;
            return;
        }
        
        // Pegar últimas 7 entradas
        const recentEntries = this.weightHistory.slice(0, 7).reverse();
        const weights = recentEntries.map(entry => entry.weight);
        const dates = recentEntries.map(entry => this.formatDate(entry.date));
        
        // Encontrar valores mínimo e máximo para escalar o gráfico
        const minWeight = Math.min(...weights);
        const maxWeight = Math.max(...weights);
        const range = maxWeight - minWeight;
        
        // Altura máxima das barras (em pixels)
        const maxHeight = 150;
        
        chartContainer.innerHTML = dates.map((date, index) => {
            const weight = weights[index];
            // Calcular altura proporcional
            const height = range > 0 ? ((weight - minWeight) / range) * maxHeight : maxHeight / 2;
            
            return `
                <div class="chart-bar" style="height: ${height}px;">
                    <div class="chart-label">${date}</div>
                </div>
            `;
        }).join('');
    }
    
    updateActivityHistory() {
        const container = document.getElementById('activityHistory');
        
        if (!this.weightHistory || this.weightHistory.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 20px; color: var(--gray-color);">
                    ${this.translate('noActivityData')}
                </div>
            `;
            return;
        }
        
        // Pegar últimas 5 entradas
        const recentEntries = this.weightHistory.slice(0, 5);
        
        container.innerHTML = recentEntries.map(entry => `
            <div class="weight-entry">
                <div class="weight-date">${this.formatDate(entry.date)}</div>
                <div class="weight-value">${entry.weight} kg</div>
                <div class="weight-bmi">IMC: ${entry.bmi.toFixed(1)}</div>
            </div>
        `).join('');
    }
    
    // Sistema de controle de água
    loadWaterData() {
        const today = this.getToday();
        
        // Se os dados são de um dia diferente, resetar
        if (this.waterData.date !== today) {
            this.waterData = {
                date: today,
                consumed: 0,
                goal: 2000
            };
            localStorage.setItem('fitTrack_water', JSON.stringify(this.waterData));
        }
        
        this.updateWaterUI();
    }
    
    updateWaterUI() {
        const consumed = this.waterData.consumed;
        const goal = this.waterData.goal;
        const remaining = goal - consumed;
        const percentage = Math.min(Math.round((consumed / goal) * 100), 100);
        
        // Atualizar valores no modal de água
        document.getElementById('water-consumed').textContent = (consumed / 1000).toFixed(1);
        document.getElementById('water-remaining').textContent = (remaining / 1000).toFixed(1);
        document.getElementById('water-percentage').textContent = `${percentage}%`;
        document.getElementById('water-goal').textContent = `${(goal / 1000).toFixed(1)}L`;
        
        // Atualizar copos
        this.updateWaterCups();
    }
    
    updateWaterCups() {
        const container = document.getElementById('water-cups');
        const cupSizes = [250, 250, 250, 250, 250, 250, 250, 250]; // 8 copos de 250ml = 2L
        const consumed = this.waterData.consumed;
        
        let totalCups = 0;
        let html = '';
        
        cupSizes.forEach((size, index) => {
            totalCups += size;
            const isFilled = consumed >= totalCups;
            
            html += `
                <div class="water-cup ${isFilled ? 'filled' : ''}" data-ml="${size}">
                    <span>${size}ml</span>
                </div>
            `;
        });
        
        container.innerHTML = html;
        
        // Adicionar event listeners aos copos
        document.querySelectorAll('.water-cup').forEach(cup => {
            cup.addEventListener('click', () => {
                const ml = parseInt(cup.dataset.ml);
                this.addWater(ml);
            });
        });
    }
    
    addWater(ml) {
        const today = this.getToday();
        
        // Verificar se é o mesmo dia
        if (this.waterData.date !== today) {
            this.waterData = {
                date: today,
                consumed: 0,
                goal: 2000
            };
        }
        
        this.waterData.consumed += ml;
        
        // Não permitir mais que a meta
        if (this.waterData.consumed > this.waterData.goal) {
            this.waterData.consumed = this.waterData.goal;
        }
        
        localStorage.setItem('fitTrack_water', JSON.stringify(this.waterData));
        this.updateWaterUI();
        this.showToast(`${ml}ml ${this.translate('waterAdded')}`);
    }
    
    resetWater() {
        const today = this.getToday();
        this.waterData = {
            date: today,
            consumed: 0,
            goal: 2000
        };
        
        localStorage.setItem('fitTrack_water', JSON.stringify(this.waterData));
        this.updateWaterUI();
        this.showToast(this.translate('waterReset'));
    }
    
    // Sistema de timer de exercícios
    setupTimer() {
        let timerInterval = null;
        let timeLeft = 300; // 5 minutos em segundos
        let isRunning = false;
        
        const timerDisplay = document.getElementById('workout-timer');
        const startBtn = document.getElementById('start-timer');
        const pauseBtn = document.getElementById('pause-timer');
        const resetBtn = document.getElementById('reset-timer');
        const presetBtns = document.querySelectorAll('.preset-btn');
        
        const updateDisplay = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };
        
        const startTimer = () => {
            if (isRunning) return;
            
            isRunning = true;
            timerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    this.showToast(this.translate('timerComplete'));
                    // Tocar som de notificação (se permitido)
                    if (this.settings.notifications) {
                        this.playNotificationSound();
                    }
                }
            }, 1000);
        };
        
        const pauseTimer = () => {
            isRunning = false;
            clearInterval(timerInterval);
        };
        
        const resetTimer = () => {
            isRunning = false;
            clearInterval(timerInterval);
            timeLeft = 300;
            updateDisplay();
        };
        
        // Event listeners
        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const time = parseInt(btn.dataset.time);
                timeLeft = time;
                updateDisplay();
                if (isRunning) {
                    pauseTimer();
                    startTimer();
                }
            });
        });
        
        updateDisplay();
    }
    
    // Sistema de streak (sequência de dias)
    checkLoginStreak() {
        const today = this.getToday();
        
        if (!this.lastLogin) {
            // Primeiro login
            this.streak = 1;
        } else if (this.lastLogin === today) {
            // Já logou hoje, manter streak
        } else {
            // Verificar se foi ontem
            const yesterday = this.getYesterday();
            if (this.lastLogin === yesterday) {
                // Login consecutivo, incrementar streak
                this.streak++;
            } else {
                // Quebrou a sequência, resetar para 1
                this.streak = 1;
            }
        }
        
        this.lastLogin = today;
        localStorage.setItem('fitTrack_lastLogin', today);
        localStorage.setItem('fitTrack_streak', this.streak.toString());
    }
    
    // Sistema de backup e restauração
    exportData() {
        const allData = {
            profile: this.userProfile,
            waterData: this.waterData,
            exerciseHistory: this.exerciseHistory,
            weightHistory: this.weightHistory,
            settings: this.settings,
            streak: this.streak,
            lastLogin: this.lastLogin,
            exportDate: new Date().toISOString(),
            appVersion: '1.0'
        };
        
        const dataStr = JSON.stringify(allData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `fittrack-backup-${this.getToday()}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        this.showToast(this.translate('dataExported'));
        
        // Mostrar prévia no modal de exportação
        document.getElementById('dataPreview').textContent = dataStr;
    }
    
    importData() {
        const fileInput = document.getElementById('importFile');
        const textarea = document.getElementById('importTextarea');
        const importBtn = document.getElementById('importDataConfirmBtn');
        const statusDiv = document.getElementById('importStatus');
        
        const validateAndImport = (dataStr) => {
            try {
                const data = JSON.parse(dataStr);
                
                // Validar estrutura básica
                if (!data.profile && !data.waterData && !data.exerciseHistory) {
                    throw new Error(this.translate('errorInvalidData'));
                }
                
                // Validar versão do app (opcional)
                if (data.appVersion && data.appVersion !== '1.0') {
                    if (!confirm(this.translate('importVersionWarning'))) {
                        return false;
                    }
                }
                
                // Confirmar substituição
                if (!confirm(this.translate('importConfirmWarning'))) {
                    return false;
                }
                
                // Importar dados
                this.userProfile = data.profile || this.userProfile;
                this.waterData = data.waterData || this.waterData;
                this.exerciseHistory = data.exerciseHistory || this.exerciseHistory;
                this.weightHistory = data.weightHistory || this.weightHistory;
                this.settings = data.settings || this.settings;
                this.streak = data.streak || this.streak;
                this.lastLogin = data.lastLogin || this.lastLogin;
                
                // Salvar no localStorage
                localStorage.setItem('fitTrack_profile', JSON.stringify(this.userProfile));
                localStorage.setItem('fitTrack_water', JSON.stringify(this.waterData));
                localStorage.setItem('fitTrack_history', JSON.stringify(this.exerciseHistory));
                localStorage.setItem('fitTrack_weightHistory', JSON.stringify(this.weightHistory));
                localStorage.setItem('fitTrack_settings', JSON.stringify(this.settings));
                localStorage.setItem('fitTrack_streak', this.streak.toString());
                localStorage.setItem('fitTrack_lastLogin', this.lastLogin);
                
                // Atualizar UI
                this.loadUserProfile();
                this.updateUI();
                this.generateExercises();
                
                // Mostrar mensagem de sucesso
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                statusDiv.style.color = 'var(--primary-color)';
                statusDiv.style.padding = '10px';
                statusDiv.style.borderRadius = '8px';
                statusDiv.innerHTML = `<i class="fas fa-check"></i> ${this.translate('dataImported')}`;
                
                this.showToast(this.translate('dataImported'));
                
                // Fechar modal após 2 segundos
                setTimeout(() => {
                    this.closeModal('import-modal');
                }, 2000);
                
                return true;
                
            } catch (error) {
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                statusDiv.style.color = 'var(--accent-color)';
                statusDiv.style.padding = '10px';
                statusDiv.style.borderRadius = '8px';
                statusDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${error.message}`;
                return false;
            }
        };
        
        // Importar de arquivo
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                textarea.value = content;
                document.getElementById('fileName').textContent = file.name;
                importBtn.disabled = false;
            };
            reader.readAsText(file);
        });
        
        // Importar de textarea
        textarea.addEventListener('input', () => {
            importBtn.disabled = !textarea.value.trim();
        });
        
        // Botão de importar
        importBtn.addEventListener('click', () => {
            validateAndImport(textarea.value);
        });
        
        // Botão de validar
        document.getElementById('validateDataBtn').addEventListener('click', () => {
            if (!textarea.value.trim()) {
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                statusDiv.style.color = 'var(--accent-color)';
                statusDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${this.translate('errorInvalidData')}`;
                return;
            }
            
            try {
                const data = JSON.parse(textarea.value);
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                statusDiv.style.color = 'var(--primary-color)';
                statusDiv.innerHTML = `<i class="fas fa-check"></i> ${this.translate('validFile')}`;
                importBtn.disabled = false;
            } catch (error) {
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                statusDiv.style.color = 'var(--accent-color)';
                statusDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${this.translate('errorInvalidData')}`;
            }
        });
        
        // Botão para selecionar arquivo
        document.getElementById('selectFileBtn').addEventListener('click', () => {
            fileInput.click();
        });
    }
    
    clearAllData() {
        // Mostrar modal de confirmação
        this.openModal('clear-modal');
        
        // Configurar botões do modal
        document.getElementById('confirmClearBtn').onclick = () => {
            // Limpar todos os dados
            localStorage.clear();
            
            // Resetar variáveis
            this.userProfile = null;
            this.waterData = { date: this.getToday(), consumed: 0, goal: 2000 };
            this.exerciseHistory = [];
            this.weightHistory = [];
            this.settings = { notifications: true, theme: 'light' };
            this.streak = 0;
            this.lastLogin = null;
            
            // Resetar formulário
            document.getElementById('profileForm').reset();
            
            // Atualizar UI
            this.loadUserProfile();
            this.updateUI();
            this.generateExercises();
            
            // Fechar modal
            this.closeModal('clear-modal');
            
            // Mostrar mensagem
            this.showToast(this.translate('dataCleared'));
        };
        
        document.getElementById('cancelClearBtn').onclick = () => {
            this.closeModal('clear-modal');
        };
    }
    
    // Sistema de modais
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    setupModals() {
        // Fechar modais ao clicar no X
        document.querySelectorAll('.modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const modalId = e.target.closest('.modal-close').dataset.modal;
                this.closeModal(modalId);
            });
        });
        
        // Fechar modal ao clicar no fundo
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Modal de detalhes do exercício
        this.setupExerciseDetailModal();
        
        // Modal de água
        document.querySelectorAll('[data-action="water"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadWaterData();
                this.openModal('water-modal');
                
                // Configurar botões do modal de água
                document.getElementById('add-water').onclick = () => this.addWater(250);
                document.getElementById('reset-water').onclick = () => this.resetWater();
            });
        });
        
        // Modal de timer
        document.querySelectorAll('[data-action="timer"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('timer-modal');
            });
        });
        
        // Modal de suporte
        document.getElementById('supportBtn').addEventListener('click', () => {
            this.openModal('support-modal');
        });
        
        document.querySelectorAll('[data-action="support"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('support-modal');
            });
        });
        
        // Configurar opções do modal de suporte
        document.getElementById('shareAppOption').addEventListener('click', () => {
            this.shareApp();
        });
        
        document.getElementById('feedbackOption').addEventListener('click', () => {
            this.giveFeedback();
        });
        
        // Modal de idioma
        document.querySelectorAll('[data-action="language"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('language-modal');
                
                // Configurar seleção de idioma no modal
                document.querySelectorAll('#language-modal .language-option').forEach(option => {
                    option.addEventListener('click', () => {
                        const lang = option.dataset.lang;
                        this.changeLanguage(lang);
                        this.closeModal('language-modal');
                    });
                });
            });
        });
        
        // Modal de privacidade
        document.querySelectorAll('[data-action="privacy"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('privacy-modal');
            });
        });
        
        // Modal sobre
        document.querySelectorAll('[data-action="about"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('about-modal');
            });
        });
        
        // Modal de exportação
        document.getElementById('exportDataBtn').addEventListener('click', () => {
            this.exportData();
            this.openModal('export-modal');
            
            // Configurar botões do modal de exportação
            document.getElementById('downloadDataBtn').onclick = () => {
                this.exportData();
                this.closeModal('export-modal');
            };
            
            document.getElementById('copyDataBtn').onclick = () => {
                const dataStr = document.getElementById('dataPreview').textContent;
                navigator.clipboard.writeText(dataStr).then(() => {
                    this.showToast(this.translate('copiedToClipboard'));
                });
            };
        });
        
        // Modal de importação
        document.getElementById('importDataBtn').addEventListener('click', () => {
            this.openModal('import-modal');
            this.importData();
        });
        
        // Modal de limpeza de dados
        document.getElementById('clearAllDataBtn').addEventListener('click', () => {
            this.clearAllData();
        });
        
        // Modal de BMI calculator
        document.getElementById('calculateBmiBtn').addEventListener('click', () => {
            this.calculateBMIModal();
        });
    }
    
    setupExerciseDetailModal() {
        // O conteúdo é gerado dinamicamente quando um exercício é clicado
    }
    
    showExerciseDetail(exerciseId) {
        // Encontrar exercício na biblioteca
        let exercise = EXERCISE_LIBRARY.find(e => e.id === exerciseId);
        
        // Se não encontrou na biblioteca, procurar nos exercícios por BMI
        if (!exercise) {
            for (const category in EXERCISES_BY_BMI) {
                exercise = EXERCISES_BY_BMI[category].find(e => e.id === exerciseId);
                if (exercise) break;
            }
        }
        
        if (!exercise) return;
        
        const t = TRANSLATIONS[this.currentLanguage];
        
        // Obter instruções e dicas traduzidas
        const instructions = t[exercise.instructionsKey] || exercise.instructionsKey || t.noInstructions;
        const tips = t[exercise.tipsKey] || exercise.tipsKey || "";
        
        // Gerar conteúdo do modal
        const modalBody = document.getElementById('exerciseDetailBody');
        modalBody.innerHTML = `
            <div class="exercise-header">
                <div class="exercise-icon-large">
                    <i class="${exercise.icon}"></i>
                </div>
                <h3>${t[exercise.nameKey] || exercise.nameKey}</h3>
                <div class="exercise-difficulty">
                    ${t[exercise.difficulty] || exercise.difficulty}
                </div>
            </div>
            
            <div class="exercise-body">
                <div class="exercise-section">
                    <h4 class="exercise-section-title">
                        <i class="fas fa-info-circle"></i>
                        ${t.exerciseInfo}
                    </h4>
                    <p>${t[exercise.descriptionKey] || exercise.descriptionKey}</p>
                    
                    <div class="profile-stats" style="margin-top: 20px;">
                        <div class="profile-stat">
                            <div class="profile-stat-value">${exercise.sets}</div>
                            <div class="profile-stat-label">${t.setsText}</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${exercise.reps}</div>
                            <div class="profile-stat-label">${t.repsText}</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${exercise.rest}</div>
                            <div class="profile-stat-label">${t.restText}</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${exercise.calories}</div>
                            <div class="profile-stat-label">${t.caloriesText}</div>
                        </div>
                    </div>
                </div>
                
                <div class="exercise-section">
                    <h4 class="exercise-section-title">
                        <i class="fas fa-list-ol"></i>
                        ${t.instructionsText}
                    </h4>
                    
                    ${instructions.includes('\n') ? instructions.split('\n').map((step, index) => `
                        <div class="exercise-instruction">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-text">${step}</div>
                        </div>
                    `).join('') : `<p>${instructions}</p>`}
                </div>
                
                ${tips ? `
                <div class="exercise-section">
                    <h4 class="exercise-section-title">
                        <i class="fas fa-lightbulb"></i>
                        ${t.tipsText}
                    </h4>
                    <div class="exercise-tips">
                        <ul class="exercise-tips-list">
                            ${tips.split('•').filter(tip => tip.trim()).map(tip => `
                                <li>${tip.trim()}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                ` : ''}
                
                <div style="margin-top: 30px;">
                    <button class="btn" onclick="app.startExercise(${exercise.id})">
                        <i class="fas fa-play"></i> ${t.startExerciseText}
                    </button>
                </div>
            </div>
        `;
        
        // Atualizar título do modal
        document.getElementById('exerciseDetailTitle').textContent = t[exercise.nameKey] || exercise.nameKey;
        
        // Abrir modal
        this.openModal('exercise-detail-modal');
    }
    
    startExercise(exerciseId) {
        // Fechar modais abertos
        this.closeModal('exercise-detail-modal');
        this.closeModal('water-modal');
        
        // Encontrar exercício
        let exercise = EXERCISE_LIBRARY.find(e => e.id === exerciseId);
        
        // Se não encontrou na biblioteca, procurar nos exercícios por BMI
        if (!exercise) {
            for (const category in EXERCISES_BY_BMI) {
                exercise = EXERCISES_BY_BMI[category].find(e => e.id === exerciseId);
                if (exercise) break;
            }
        }
        
        if (!exercise) return;
        
        // Registrar no histórico
        this.addExerciseToHistory(exerciseId);
        
        // Mostrar timer com o tempo do exercício
        this.openModal('timer-modal');
        
        // Configurar timer para o tempo do exercício
        const reps = exercise.reps;
        let timeInSeconds = 300; // Padrão 5 minutos
        
        if (reps.includes('min')) {
            const minutes = parseInt(reps);
            timeInSeconds = minutes * 60;
        } else if (reps.includes('s')) {
            const seconds = parseInt(reps);
            timeInSeconds = seconds;
        }
        
        // Atualizar timer
        const timerDisplay = document.getElementById('workout-timer');
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Configurar botões de tempo rápido para incluir o tempo do exercício
        document.querySelectorAll('.preset-btn').forEach(btn => {
            const time = parseInt(btn.dataset.time);
            if (time === timeInSeconds) {
                btn.style.backgroundColor = 'var(--primary-color)';
                btn.style.color = 'white';
            }
        });
        
        this.showToast(this.translate('exerciseStarted'));
    }
    
    addExerciseToHistory(exerciseId) {
        const today = this.getToday();
        let exercise = EXERCISE_LIBRARY.find(e => e.id === exerciseId);
        
        // Se não encontrou na biblioteca, procurar nos exercícios por BMI
        if (!exercise) {
            for (const category in EXERCISES_BY_BMI) {
                exercise = EXERCISES_BY_BMI[category].find(e => e.id === exerciseId);
                if (exercise) break;
            }
        }
        
        if (!exercise) return;
        
        const t = TRANSLATIONS[this.currentLanguage];
        
        const historyEntry = {
            date: today,
            exerciseId: exerciseId,
            exerciseName: t[exercise.nameKey] || exercise.nameKey,
            calories: exercise.calories,
            completedAt: new Date().toISOString()
        };
        
        this.exerciseHistory.unshift(historyEntry);
        
        // Manter apenas últimos 100 registros
        if (this.exerciseHistory.length > 100) {
            this.exerciseHistory = this.exerciseHistory.slice(0, 100);
        }
        
        localStorage.setItem('fitTrack_history', JSON.stringify(this.exerciseHistory));
    }
    
    calculateBMIModal() {
        const weight = parseFloat(document.getElementById('bmiWeight').value);
        const height = parseFloat(document.getElementById('bmiHeight').value);
        
        if (!weight || !height) {
            this.showToast(this.translate('errorRequiredFields'), 'error');
            return;
        }
        
        if (weight < 30 || weight > 300) {
            this.showToast('Peso deve ser entre 30kg e 300kg', 'error');
            return;
        }
        
        if (height < 100 || height > 250) {
            this.showToast('Altura deve ser entre 100cm e 250cm', 'error');
            return;
        }
        
        const bmi = this.calculateBMI(weight, height);
        const category = this.getBMICategoryText(bmi);
        
        // Atualizar resultado
        document.getElementById('bmiValueResult').textContent = bmi.toFixed(1);
        document.getElementById('bmiCategory').textContent = category;
        document.getElementById('bmiDescription').textContent = this.getBMIDescription(bmi);
        document.getElementById('bmiResult').style.display = 'block';
        
        this.showToast(this.translate('bmiCalculated'));
    }
    
    getBMIDescription(bmi) {
        const t = TRANSLATIONS[this.currentLanguage];
        const category = this.getBMICategory(bmi);
        
        switch(category) {
            case 'underweight': return t.bmiDescUnderweight;
            case 'normal': return t.bmiDescNormal;
            case 'overweight': return t.bmiDescOverweight;
            case 'obesity1': return t.bmiDescObesity1;
            case 'obesity2': return t.bmiDescObesity2;
            case 'obesity3': return t.bmiDescObesity3;
            default: return '';
        }
    }
    
    // Sistema de navegação por tabs
    setupNavigation() {
        // Navegação por tabs
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remover classe active de todas as tabs
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                
                // Adicionar classe active à tab clicada
                item.classList.add('active');
                
                // Esconder todo o conteúdo
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Mostrar conteúdo da tab selecionada
                const tabId = item.dataset.tab + '-tab';
                document.getElementById(tabId).classList.add('active');
                
                // Rolar para o topo
                window.scrollTo(0, 0);
            });
        });
        
        // Links de ação rápida
        document.querySelectorAll('[data-action]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const action = link.dataset.action;
                
                switch(action) {
                    case 'editProfile':
                        // Navegar para a tab de perfil
                        document.querySelector('.nav-item[data-tab="profile"]').click();
                        break;
                    case 'trainingPlan':
                        // Navegar para a tab de treino
                        document.querySelector('.nav-item[data-tab="training"]').click();
                        break;
                    case 'water':
                        // Abrir modal de água
                        this.loadWaterData();
                        this.openModal('water-modal');
                        break;
                    case 'timer':
                        // Abrir modal de timer
                        this.openModal('timer-modal');
                        break;
                }
            });
        });
    }
    
    // Sistema de notificações toast
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = message;
        
        // Definir cor baseada no tipo
        if (type === 'error') {
            toast.style.backgroundColor = 'var(--accent-color)';
        } else if (type === 'warning') {
            toast.style.backgroundColor = '#F59E0B';
        } else {
            toast.style.backgroundColor = 'var(--primary-color)';
        }
        
        // Mostrar toast
        toast.classList.add('show');
        
        // Esconder após 3 segundos
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Sistema de compartilhamento
    shareApp() {
        if (navigator.share) {
            navigator.share({
                title: 'FitTrack - Personal Trainer',
                text: this.translate('shareAppDesc'),
                url: window.location.href
            });
        } else {
            // Fallback para copiar link
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showToast(this.translate('linkCopied'));
            });
        }
    }
    
    giveFeedback() {
        const email = 'support@universussoft.com';
        const subject = 'Feedback - FitTrack App';
        const body = `\n\n---\nApp Version: 1.0\nLanguage: ${this.currentLanguage}\nUser Profile: ${this.userProfile ? 'Yes' : 'No'}`;
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    playNotificationSound() {
        // Criar som de notificação simples
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    }
    
    // Utilitários
    getToday() {
        const now = new Date();
        return now.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    }
    
    getYesterday() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday.toISOString().split('T')[0];
    }
    
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const today = new Date(this.getToday());
        const yesterday = new Date(this.getYesterday());
        
        if (date.toDateString() === today.toDateString()) {
            return this.translate('today');
        } else if (date.toDateString() === yesterday.toDateString()) {
            return this.translate('yesterday');
        } else {
            const locale = this.currentLanguage === 'pt' ? 'pt-BR' : 
                          this.currentLanguage === 'en' ? 'en-US' :
                          this.currentLanguage === 'es' ? 'es-ES' :
                          this.currentLanguage === 'fr' ? 'fr-FR' :
                          this.currentLanguage === 'de' ? 'de-DE' : 'en-US';
            
            return date.toLocaleDateString(locale, {
                day: '2-digit',
                month: 'short'
            });
        }
    }
    
    updateNameCharCount() {
        const nameInput = document.getElementById('name');
        const charCount = document.getElementById('nameCharCount');
        
        nameInput.addEventListener('input', () => {
            const count = nameInput.value.length;
            charCount.textContent = `${count}/50`;
            charCount.style.color = count > 45 ? 'var(--accent-color)' : 'var(--gray-color)';
        });
    }
    
    updateUI() {
        this.updateHeader();
        this.updateWeightChart();
        this.updateActivityHistory();
    }
    
    // Configurar todos os event listeners
    setupEventListeners() {
        // Formulário de perfil
        const profileForm = document.getElementById('profileForm');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveProfile();
            });
        }
        
        // Botão de limpar perfil
        const clearProfileBtn = document.getElementById('clearProfileBtn');
        if (clearProfileBtn) {
            clearProfileBtn.addEventListener('click', () => {
                this.clearProfile();
            });
        }
        
        // Seletor de idioma
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn) {
            languageBtn.addEventListener('click', () => {
                const dropdown = document.getElementById('languageDropdown');
                dropdown.classList.toggle('show');
            });
        }
        
        // Opções de idioma no dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                
                // Fechar dropdown
                document.getElementById('languageDropdown').classList.remove('show');
            });
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                document.getElementById('languageDropdown').classList.remove('show');
            }
        });
        
        // Botão completar perfil
        const completeProfileBtn = document.getElementById('completeProfileBtn');
        if (completeProfileBtn) {
            completeProfileBtn.addEventListener('click', () => {
                document.querySelector('.nav-item[data-tab="profile"]').click();
            });
        }
        
        // Configurar navegação
        this.setupNavigation();
        
        // Configurar modais
        this.setupModals();
        
        // Configurar timer
        this.setupTimer();
        
        // Configurar calculadora de BMI
        const calculateBmiBtn = document.getElementById('calculateBmiBtn');
        if (calculateBmiBtn) {
            calculateBmiBtn.addEventListener('click', () => {
                this.calculateBMIModal();
            });
        }
        
        // Preencher calculadora de BMI com dados do perfil se disponível
        if (this.userProfile) {
            document.getElementById('bmiWeight').value = this.userProfile.weight;
            document.getElementById('bmiHeight').value = this.userProfile.height;
        }
        
        // Configurar botão de notificações
        const notificationBtn = document.getElementById('notificationBtn');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => {
                this.showToast(this.translate('notificationsComingSoon'));
            });
        }
        
        // Atualizar contador de caracteres do nome
        this.updateNameCharCount();
        
        // Configurar tecla Enter no formulário
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                const focused = document.activeElement;
                if (focused && focused.form && focused.form.id === 'profileForm') {
                    if (!focused.matches('button')) {
                        e.preventDefault();
                    }
                }
            }
        });
        
        // Suporte PWA - Adicionar à tela inicial
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
            });
        }
    }
}

// Inicializar aplicativo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.app = new FitnessApp();
});