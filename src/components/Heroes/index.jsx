import {
  Container,
  HeroesImgContainer,
  InfoHeroes,
  InfoHeroesImg,
  InfoHeroesText,
} from "./styles"
import { useState, useEffect } from "react"
import hero1 from "/public/images/hero1.jpg"
import hero2 from "/public/images/hero2.jpg"
import hero3 from "/public/images/hero3.jpg"
import hero4 from "/public/images/hero4.jpg"
import infohero1 from "/public/images/hero1fullbody.png"
import infohero2 from "/public/images/hero2fullbody.png"
import infohero3 from "/public/images/hero3fullbody.png"
import infohero4 from "/public/images/hero4fullbody.png"

export function Heroes() {
  const [heroName, setHeroName] = useState(`Kal Stonestrike / 18 / Scottish / November 27`)
  const [heroBio, setHeroBio] = useState(`Kal never had much use for "planning". While that's all well and good for a kid, he's on the cusp of manhood now and things are starting to get complicated. Would he attend university? learn a trade? get slicked into a portal and transported to a magical land? turns out it was the third one. Ah well, maybe an epic adventure is just what Kal needs to figure out his life.`)
  const [heroLike, setHeroLike] = useState(`Geography, his sister, Charpup, drawing.`)    
  const [heroDislike, setHeroDislike] = useState(`Sitting still, waiting in line, travelling by portal.`)
  const [heroFullBodyImg, setHeroFullBodyImg] = useState(`${infohero1}`)
  const [kalImgClass, setKalImgClass] = useState(true)
  const [tanjaImgClass, setTanjaImgClass] = useState(false)
  const [danielImgClass, setDanielImgClass] = useState(false)
  const [angelicaImgClass, setAngelicaImgClass] = useState(false)


  const changeHeroInfoToKal = () => {
    setHeroName(`Kal Stonestrike / 18 / Scottish / November 27`)
    setHeroBio(`Kal never had much use for "planning". While that's all well and good for a kid, he's on the cusp of manhood now and things are starting to get complicated. Would he attend university? learn a trade? get slicked into a portal and transported to a magical land? turns out it was the third one. Ah well, maybe an epic adventure is just what Kal needs to figure out his life.`)
    setHeroLike(`Geography, his sister, Charpup, drawing.`)
    setHeroDislike(`Sitting still, waiting in line, travelling by portal.`)
    setHeroFullBodyImg(`${infohero1}`)
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
    setHeroFullBodyImg(`${infohero2}`)
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
    setHeroFullBodyImg(`${infohero3}`)
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
    setHeroFullBodyImg(`${infohero4}`)
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
          src={hero1}
          alt="Kal"
          className={kalImgClass ? "" : "not-selected"}
          onClick={changeHeroInfoToKal}
        />
        <img
          id="tanja"
          src={hero2}
          alt="Tanja"
          className={tanjaImgClass ? "" : "not-selected"}
          onClick={changeHeroInfoToTanja}
        />
        <img
          id="daniel"
          src={hero3}
          alt="Daniel"
          className={danielImgClass ? "" : "not-selected"}
          onClick={changeHeroInfoToDaniel}
        />
        <img
          id="angelica"
          src={hero4}
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
        <InfoHeroesImg src={`${heroFullBodyImg}`} />
      </InfoHeroes>
    </Container>
  )
}
