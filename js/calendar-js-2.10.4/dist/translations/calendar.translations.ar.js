/*! Calendar.js v2.10.4 | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
      "الاثنين",
      "الثلاثاء",
      "تزوج",
      "الخميس",
      "الجمعة",
      "قعد",
      "شمس"
    ],
    "dayNames": [
      "الاثنين",
      "يوم الثلاثاء",
      "الأربعاء",
      "يوم الخميس",
      "جمعة",
      "السبت",
      "الأحد"
    ],
    "dayNamesAbbreviated": [
      "الاثنين",
      "الثلاثاء",
      "تزوج",
      "الخميس",
      "الجمعة",
      "قعد",
      "شمس"
    ],
    "monthNames": [
      "يناير",
      "شهر فبراير",
      "يمشي",
      "أبريل",
      "يمكن",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "اكتوبر",
      "شهر نوفمبر",
      "ديسمبر"
    ],
    "monthNamesAbbreviated": [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "يمكن",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر"
    ],
    "previousMonthTooltipText": "الشهر الماضى",
    "nextMonthTooltipText": "الشهر القادم",
    "previousDayTooltipText": "اليوم السابق",
    "nextDayTooltipText": "اليوم التالي",
    "previousWeekTooltipText": "الأسبوع السابق",
    "nextWeekTooltipText": "الأسبوع المقبل",
    "addEventTooltipText": "أضف حدثًا",
    "closeTooltipText": "يغلق",
    "exportEventsTooltipText": "أحداث التصدير",
    "todayTooltipText": "اليوم",
    "refreshTooltipText": "ينعش",
    "searchTooltipText": "يبحث",
    "expandDayTooltipText": "قم بتوسيع اليوم",
    "viewAllEventsTooltipText": "عرض جميع الأحداث",
    "viewFullWeekTooltipText": "عرض الاسبوع كاملا",
    "fromText": "من:",
    "toText": "ل:",
    "isAllDayText": "طوال اليوم",
    "titleText": "عنوان:",
    "descriptionText": "وصف:",
    "locationText": "موقع:",
    "addText": "يضيف",
    "updateText": "تحديث",
    "cancelText": "يلغي",
    "removeEventText": "يزيل",
    "addEventTitle": "أضف حدثًا",
    "editEventTitle": "تحرير الحدث",
    "exportStartFilename": "تصدير_الأحداث_",
    "fromTimeErrorMessage": "الرجاء تحديد وقت \"من\" صالح.",
    "toTimeErrorMessage": "الرجاء تحديد وقت \"إلى\" صالح.",
    "toSmallerThanFromErrorMessage": "الرجاء تحديد تاريخ \"إلى\" أكبر من تاريخ \"من\".",
    "titleErrorMessage": "الرجاء إدخال قيمة في حقل \"العنوان\" (بدون مساحة فارغة).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "نعم",
    "noText": "لا",
    "allDayText": "طوال اليوم",
    "allEventsText": "كل الأحداث",
    "toTimeText": "ل",
    "confirmEventRemoveTitle": "تأكيد إزالة الحدث",
    "confirmEventRemoveMessage": "لا يمكن التراجع عن إزالة هذا الحدث. ",
    "okText": "نعم",
    "exportEventsTitle": "أحداث التصدير",
    "selectColorsText": "حدد الألوان",
    "backgroundColorText": "لون الخلفية:",
    "textColorText": "لون الخط:",
    "borderColorText": "لون الحدود:",
    "searchEventsTitle": "أحداث البحث",
    "previousText": "سابق",
    "nextText": "التالي",
    "matchCaseText": "حالة مباراة",
    "repeatsText": "يكرر:",
    "repeatDaysToExcludeText": "كرر الأيام لاستبعاد:",
    "daysToExcludeText": "الأيام المستبعدة:",
    "seriesIgnoreDatesText": "سلسلة تجاهل التواريخ:",
    "repeatsNever": "أبداً",
    "repeatsEveryDayText": "كل يوم",
    "repeatsEveryWeekText": "كل اسبوع",
    "repeatsEvery2WeeksText": "كل 2 أسابيع",
    "repeatsEveryMonthText": "كل شهر",
    "repeatsEveryYearText": "كل عام",
    "repeatsCustomText": "مخصص:",
    "repeatOptionsTitle": "كرر الخيارات",
    "moreText": "أكثر",
    "includeText": "يشمل:",
    "minimizedTooltipText": "تصغير",
    "restoreTooltipText": "يعيد",
    "removeAllEventsInSeriesText": "إزالة كافة الأحداث في السلسلة",
    "createdText": "مخلوق:",
    "organizerNameText": "منظم:",
    "organizerEmailAddressText": "البريد الإلكتروني للمنظم:",
    "enableFullScreenTooltipText": "قم بتشغيل وضع ملء الشاشة",
    "disableFullScreenTooltipText": "قم بإيقاف تشغيل وضع ملء الشاشة",
    "idText": "بطاقة تعريف:",
    "expandMonthTooltipText": "قم بتوسيع الشهر",
    "repeatEndsText": "تكرار ينتهي:",
    "noEventsAvailableText": "لا توجد أحداث متاحة.",
    "viewFullWeekText": "عرض الاسبوع كاملا",
    "noEventsAvailableFullText": "لا توجد أحداث متاحة للعرض.",
    "clickText": "انقر",
    "hereText": "هنا",
    "toAddANewEventText": "لإضافة حدث جديد.",
    "weekText": "أسبوع",
    "groupText": "مجموعة:",
    "configurationTooltipText": "إعدادات",
    "configurationTitleText": "إعدادات",
    "groupsText": "مجموعات",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "لقد بدأ الحدث '{0}'.",
    "optionsText": "خيارات:",
    "startsWithText": "ابدا ب",
    "endsWithText": "ينتهي ب",
    "containsText": "يتضمن",
    "displayTabText": "عرض",
    "enableAutoRefreshForEventsText": "تمكين التحديث التلقائي للأحداث",
    "enableBrowserNotificationsText": "تمكين إشعارات المتصفح",
    "enableTooltipsText": "تمكين تلميحات الأدوات",
    "dayText": "يوم",
    "daysText": "أيام",
    "hourText": "ساعة",
    "hoursText": "ساعات",
    "minuteText": "دقيقة",
    "minutesText": "دقائق",
    "enableDragAndDropForEventText": "تمكين السحب",
    "organizerTabText": "منظم",
    "removeEventsTooltipText": "إزالة الأحداث",
    "confirmEventsRemoveTitle": "تأكيد إزالة الأحداث",
    "confirmEventsRemoveMessage": "لا يمكن التراجع عن إزالة هذه الأحداث غير المتكررة. ",
    "eventText": "حدث",
    "optionalText": "خياري",
    "urlText": "عنوان URL:",
    "openUrlText": "رابط مفتوح",
    "thisWeekTooltipText": "هذا الاسبوع",
    "dailyText": "يوميًا",
    "weeklyText": "أسبوعي",
    "monthlyText": "شهريا",
    "yearlyText": "سنوي",
    "repeatsByCustomSettingsText": "عن طريق الإعدادات المخصصة",
    "lastUpdatedText": "آخر تحديث:",
    "advancedText": "متقدم",
    "copyText": "ينسخ",
    "pasteText": "معجون",
    "duplicateText": "ينسخ",
    "showAlertsText": "إظهار التنبيهات",
    "selectDatePlaceholderText": "حدد تاريخ...",
    "hideDayText": "إخفاء اليوم",
    "notSearchText": "لا (عكس)",
    "showHolidaysInTheDisplaysText": "إظهار أيام العطل في شاشة العرض الرئيسية وأشرطة العناوين",
    "newEventDefaultTitle": "* حدث جديد",
    "urlErrorMessage": "الرجاء إدخال عنوان URL صالح في حقل \"عنوان URL\" (أو اتركه فارغًا).",
    "searchTextBoxPlaceholder": "ابحث عن العنوان والوصف وما إلى ذلك ...",
    "currentMonthTooltipText": "الشهر الحالي",
    "cutText": "يقطع",
    "showMenuTooltipText": "قائمة العرض",
    "eventTypesText": "أنواع الأحداث",
    "lockedText": "مقفل:",
    "typeText": "يكتب:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "أيام",
    "visibleDaysText": "أيام مرئية",
    "previousYearTooltipText": "السنة الماضية",
    "nextYearTooltipText": "العام القادم",
    "showOnlyWorkingDaysText": "عرض أيام العمل فقط",
    "exportFilenamePlaceholderText": "الاسم: (اختياري)",
    "errorText": "خطأ",
    "exportText": "يصدّر",
    "configurationUpdatedText": "تم تحديث التكوين.",
    "eventAddedText": "تمت إضافة حدث {0}.",
    "eventUpdatedText": "تم تحديث حدث {0}.",
    "eventRemovedText": "تمت إزالة حدث {0}.",
    "eventsRemovedText": "تمت إزالة {0} من الأحداث.",
    "eventsExportedToText": "تم تصدير الأحداث إلى {0}.",
    "eventsPastedText": "تم لصق {0} حدث.",
    "eventsExportedText": "تم تصدير الأحداث.",
    "copyToClipboardOnlyText": "نسخ إلى الحافظة فقط",
    "workingDaysText": "أيام العمل",
    "weekendDaysText": "أيام عطلة نهاية الأسبوع",
    "showAsBusyText": "إظهار مشغول",
    "selectAllText": "اختر الكل",
    "selectNoneText": "لا تختر شيء",
    "importEventsTooltipText": "أحداث الاستيراد",
    "eventsImportedText": "تم استيراد {0} من الأحداث.",
    "viewFullYearTooltipText": "عرض سنة كاملة",
    "currentYearTooltipText": "السنة الحالية",
    "alertOffsetText": "إزاحة التنبيه (بالدقائق):",
    "viewFullDayTooltipText": "عرض يوم كامل",
    "confirmEventUpdateTitle": "تأكيد تحديث الحدث",
    "confirmEventUpdateMessage": "هل ترغب في تحديث الحدث من الآن فصاعدًا أم السلسلة بأكملها؟",
    "forwardText": "إلى الأمام",
    "seriesText": "مسلسل",
    "viewTimelineTooltipText": "عرض الجدول الزمني",
    "nextPropertyTooltipText": "العقار التالي",
    "noneText": "(لا أحد)",
    "shareText": "يشارك",
    "shareStartFilename": "shared_events_",
    "previousPropertyTooltipText": "الملكية السابقة",
    "jumpToDateTitle": "الانتقال إلى التاريخ",
    "goText": "يذهب"
  };