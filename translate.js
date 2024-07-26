let translate = document.querySelector('.trigger')
translate.addEventListener('click', () => {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'fr',
        includedLanguages: 'it,fr', // Add more languages as needed
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    )
  }
  googleTranslateElementInit()
})
