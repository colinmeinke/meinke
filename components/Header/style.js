import config from '../../config/style'
import css from 'next/css'

const {
  brandColor1,
  brandColor2,
  brandColor3,
  brandColor4,
  brandColor5,
  brandFontColor,
  fontSizeMedium,
  fontSizeLarge,
  lightFontColor,
  spacingLarge,
  spacingRegular,
  spacingSmall
} = config

const main = css({
  alignItems: 'center',
  backgroundColor: brandColor4,
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), ${brandColor4}), linear-gradient(75deg, ${brandColor1}, ${brandColor2}, ${brandColor3}, ${brandColor4}, ${brandColor5})`,
  borderTop: `4px solid ${brandColor3}`,
  display: 'flex',
  minHeight: '300px',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute'
  },
  '&::before': {
    background: 'url(/static/images/logo.png) no-repeat',
    backgroundSize: '50px',
    height: '32px',
    left: `${spacingRegular}px`,
    top: `${spacingRegular}px`,
    width: '50px',
  },
  '&::after': {
    right: 0,
    top: 0
  },
  '@media (min-width: 800px) and (min-height: 500px)': {
    '&::before': {
      left: `${spacingLarge}px`,
      top: `${spacingLarge}px`
    }
  },
  '@media (min-width: 800px)': {
    minHeight: '400px',
    '&::after': {
      background: `url(/static/images/cube.png) no-repeat 0 -144px`,
      backgroundSize: '429px',
      height: '400px',
      width: '305px'
    }
  },
  '@media (min-width: 900px)': {
    minHeight: '450px',
    '&::after': {
      background: 'url(/static/images/cube.png) no-repeat 0 -162px',
      backgroundSize: '482px',
      height: '450px',
      width: '340px'
    }
  },
  '@media (min-width: 950px)': {
    '&::after': {
      width: '342px'
    }
  },
  '@media (min-width: 1000px)': {
     minHeight: '500px',
     '&::after': {
       background: 'url(/static/images/cube.png) no-repeat 0 -179px',
       backgroundSize: '535px',
       height: '500px',
       width: '375px'
     }
  }
})

const container = css({
  padding: `${spacingRegular}px`,
  '@media (min-width: 800px) and (min-height: 500px)': {
    padding: `${spacingLarge}px`
  },
  '@media (min-width: 800px)': {
    maxWidth: '465px'
  },
  '@media (min-width: 900px)': {
    maxWidth: '500px'
  },
  '@media (min-width: 950px)': {
    maxWidth: '550px'
  },
  '@media (min-width: 1000px)': {
    maxWidth: '600px'
  }
})

const title = css({
  color: brandFontColor,
  fontSize: `${fontSizeMedium}px`,
  fontWeight: 'bold',
  lineHeight: 1.2,
  '@media (min-width: 800px) and (min-height: 500px)': {
    fontSize: `${fontSizeLarge}px`,
    lineHeight: 1
  }
})

const subTitle = css({
  color: brandFontColor,
  fontWeight: 'bold',
  marginTop: `${spacingSmall}px`,
  '@media (min-width: 800px) and (min-height: 500px)': {
    fontSize: `${fontSizeMedium}px`,
    lineHeight: 1.2,
    marginTop: `${spacingRegular}px`
  }
})

const description = css({
  color: lightFontColor,
  fontWeight: 'normal',
  marginTop: `${spacingSmall}px`,
  '@media (min-width: 800px) and (min-height: 500px)': {
    marginTop: `${spacingRegular}px`
  }
})

export default {
  main,
  container,
  title,
  subTitle,
  description
}
