import {
  Container,
  HeroesImgContainer,
  InfoHeroes,
  InfoHeroesImg,
  InfoHeroesText,
} from "./styles"
import { useState, useEffect } from "react"

export function Heroes() {
  const [heroName, setHeroName] = useState(`Kal Stonestrike / 18 / Scottish / November 27`)
  const [heroBio, setHeroBio] = useState(`Kal never had much use for "planning". While that's all well and good for a kid, he's on the cusp of manhood now and things are starting to get complicated. Would he attend university? learn a trade? get slicked into a portal and transported to a magical land? turns out it was the third one. Ah well, maybe an epic adventure is just what Kal needs to figure out his life.`)
  const [heroLike, setHeroLike] = useState(`Geography, his sister, Charpup, drawing.`)    
  const [heroDislike, setHeroDislike] = useState(`Sitting still, waiting in line, travelling by portal.`)
  const [heroFullBodyImg, setHeroFullBodyImg] = useState(`hero1fullbody`)
  const [kalImgClass, setKalImgClass] = useState(true)
  const [tanjaImgClass, setTanjaImgClass] = useState(false)
  const [danielImgClass, setDanielImgClass] = useState(false)
  const [angelicaImgClass, setAngelicaImgClass] = useState(false)


  const changeHeroInfoToKal = () => {
    setHeroName(`Kal Stonestrike / 18 / Scottish / November 27`)
    setHeroBio(`Kal never had much use for "planning". While that's all well and good for a kid, he's on the cusp of manhood now and things are starting to get complicated. Would he attend university? learn a trade? get slicked into a portal and transported to a magical land? turns out it was the third one. Ah well, maybe an epic adventure is just what Kal needs to figure out his life.`)
    setHeroLike(`Geography, his sister, Charpup, drawing.`)
    setHeroDislike(`Sitting still, waiting in line, travelling by portal.`)
    setHeroFullBodyImg(`hero1fullbody`)
    setKalImgClass(true)
    setTanjaImgClass(false)
    setDanielImgClass(false)
    setAngelicaImgClass(false)
  }

  const changeHeroInfoToTanja = () => {
    setHeroName(`Tanja Silver / 22 / American / June 1`)
    setHeroBio(`Tanja loves to party. there's nothing better than a weekend of pounding music, dancing, and alcohol to distract you from a disappointing world. On the weekdays, Tanja drifts through life, deploying a sarcastic, fatalistic attitude to hide her fear that... maybe this is as good as it gets? Perhaps her time in Pyli will give her the chance to connect with herself (if she's willing to).`)
    setHeroLike(`Beer, wine, vodka and tequila con fridays.`)
    setHeroDislike(`Taking anything seriously.`)
    setHeroFullBodyImg(`hero2fullbody`)
    setKalImgClass(false)
    setTanjaImgClass(true)
    setDanielImgClass(false)
    setAngelicaImgClass(false)
  }

  const changeHeroInfoToDaniel = () => {
    setHeroName(`Daniel Castrillo / 12 / Spanish / October 24`)
    setHeroBio(`Daniel, a sweet and caring boy, has spent his entire life under the thumb of an uncaring and violent father. Does Pyli represent a new beginning for him? A chance to finally live out his dreams of heroism? Or maybe this new world and its strange perils will be too much. Going from shy child to legendary warrior is a tough transition. Is Daniel ready? Only time will tell.`)
    setHeroLike(`Fantasy novels, cooking, quietly observing others.`)
    setHeroDislike(`Loud noises, danger, being observed by others.`)
    setHeroFullBodyImg(`hero3fullbody`)
    setKalImgClass(false)
    setTanjaImgClass(false)
    setDanielImgClass(true)
    setAngelicaImgClass(false)    
  }
  
  const changeHeroInfoToAngelica = () => {
    setHeroName(`Angelica Caraxas / 35 / British / September 5`)
    setHeroBio(`Angelica actually has a lot going on in her life...or she did before that portal opened up and brought her to Pyli, now her entire legal career is on hold while she figures out the fastest way to get home cand no, she doesn't plan on staying even a second longer than she absolutely has to). Although, maybe, just maybe, this tie in pyli is just what she needs to understand that there's more to life than work.`)
    setHeroLike(`Expensive foods, the law, being in control.`)
    setHeroDislike(`Being kidnapped from her life to fight monsters for a bunch of weirdo magicians!`)
    setHeroFullBodyImg(`hero4fullbody`)
    setKalImgClass(false)
    setTanjaImgClass(false)
    setDanielImgClass(false)
    setAngelicaImgClass(true)    
  }  

  return (
    <Container>
      <h2>MEET THE HEROES</h2>
      <HeroesImgContainer>
        <img
          id="kal"
          src="/src/assets/images/hero1.jpg"
          alt="Kal"
          className={kalImgClass ? "" : "not-selected"} 
          onClick={changeHeroInfoToKal}
        />
        <img
          id="tanja"
          src="/src/assets/images/hero2.jpg"
          alt="Tanja"
          className={tanjaImgClass ? "" : "not-selected"} 
          onClick={changeHeroInfoToTanja}
        />
        <img
          id="daniel"
          src="/src/assets/images/hero3.jpg"
          alt="Daniel"
          className={danielImgClass ? "" : "not-selected"} 
          onClick={changeHeroInfoToDaniel}
        />
        <img
          id="angelica"
          src="/src/assets/images/hero4.jpg"
          alt="Angelica"
          className={angelicaImgClass ? "" : "not-selected"} 
          onClick={changeHeroInfoToAngelica}
        />
      </HeroesImgContainer>
      <InfoHeroes>
        <InfoHeroesText>
          <h3 className="hero-name">{heroName}</h3>
          <p className="bio">{heroBio}</p>
          <p className="like">
            <span>Likes: </span>
            {heroLike}
          </p>
          <p className="dislike">
            <span>Dislikes: </span>
            {heroDislike}
          </p>
        </InfoHeroesText>
        <InfoHeroesImg src={`/src/assets/images/${heroFullBodyImg}.png`} />
      </InfoHeroes>
    </Container>
  )
}
