## Welcome again to another React project! 👋

# Vite + React Project

## Test the project yourself: [Teste the project here!!!](https://water-calculator-react-tailwind.vercel.app/)

### Home Page
- Calculate Page.

![](./src/components/images/sampleMobile.png)

### Menu Mobile
- Open Menu.

![](./src/components/images/sampleMobileMenu.png)

## Some code that I'm proud of
```js
const doCalculate = (event) => {

    event.preventDefault()

    const weight = dataWeight.current.value
    const waterNeed = defineWaterNeed()

    const totalWaterNeed = ((waterNeed * weight) / 1000)

    setResult(totalWaterNeed)
    setMlWater(waterNeed)
}
```

## Built with

- REACT + Vite;
- Tailwind;
- Microsoft Excel to make and compare the calculus.

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)

## References
- https://www.researchgate.net/publication/303535135_A_fuzzy_recommendation_system_for_daily_water_intake
- https://www.tuasaude.com/beber-agua/
- https://www.unitypoint.org/news-and-articles/how-much-protein-do-you-need-daily-ideal-protein-intake-for-muscle-growth-weight-loss-and-managing-chronic-conditions
