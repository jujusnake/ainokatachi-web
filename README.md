<div align="center">
  <h3 align="center">愛の形 The Shape of Love</h3>

  <p align="center">
    An interactive mini web page exploring different shapes of Love
    <br />
    <br />
    <a href="https://ainokatachi-web.vercel.app/">View Website</a>
    ·
    <a href="https://www.figma.com/file/VHCqcek0ZmwfUte2WvfVkF/%E6%84%9B%E3%81%AE%E5%BD%A2?type=design&node-id=0%3A1&mode=design&t=pootLlWKAXr5spSr-1">View Figma</a>
    ·
    <a href="https://github.com/jujusnake/ainokatachi-web/issues">Report Bug</a>
  </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#message">Message</a></li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br/>

## About The Project

![web screenshot][product-screenshot]

❤️ This is a small web project exploring the shapes of love.

📌 SVG images and morphing them with react-spring.

🧑‍💻 Design & Front-end developement by [me](https://github.com/jujusnake).

<br/>

### Original Inpiration

This project has started from [Ariana Grande - positions (Official Live Performance) by Vevo](https://www.youtube.com/watch?v=uL52DajINdY)

![Ariana Performing][ari-screenshot]

From the lyrics, I got the idea of "versatile and diverse sides of love".  
 _(although at first I only thought this song was all about sexual implications)_

\+ from the video, I got the neon-like color motifs from the stage lightings.

### Additional Inspiration

At first, it was very hard to come up with a nice idea for a web project. However I could find a starting point after listening to [Bam Yang Gang by BIBI](https://www.youtube.com/watch?v=smdmEhkIRVc). Also this song's [AI generated cover with the voice of the late Kim Kwang-seok](https://www.youtube.com/watch?v=MAhi-BPFjMc) helped me set the mood of this project.

With these inspirations, I went from Ariana's "Switchin' the **positions** for you" to "How many **shapes** can your love have?"

_Also, positions are a lot harder to show on web. Shapes are easy. We can use svg!_

### Design and Development

Maybe somebody would wonder why it is in Japanese, but that is solely becuase I found this awesome looking font called [DotGothic16](https://fonts.google.com/specimen/DotGothic16) on Google Fonts. I just really wanted to use it.

UI Design was simple, the overall mood was "A mysterious mail from somewhere". That's why I added the glitches and the typewriter effects. I wanted to keep the UI as minimal and raw as possible so that users can focus more on the actual shapes.

The shapes are all svgs and are accented with shadows and gradient. It was intended to be a little similar to the neon lightings in Ariana's video. The svg paths used all have different node count so I had to interpolate in between the nodes to animate the shape changes (morph?).

It was a fun time developing because it's my first time doing something complex with svgs.

<br/>

## Message

I am the biggest advocate of love. But love does have a lot of different sides. It can be happiness, sadness, anger or something more. So with this project I wanted to create an short experience for users to think about how many shapes love may have. Also I intended the UI to be neutral, dark, and pixelated for more private and isolated mood.

I wish users would feel like they got a weird invitation and go into a secret web space to think about the two questions I ask in the intro.

> Are you in love?  
> What is the shape of your love?

And I hope you guys love love as much as I love it 💖

![Love y'all][heart-screenshot]

<br/>

## Installation

I don't know if anyone wants to clone this project, but here is how.

```

git clone https://github.com/jujusnake/ainokatachi-web.git
npm install
npm run dev

```

Thank you 🙏

<br />

## Acknowledgments

### Built With

[![React][React.js]][React-url]  
[![Vite][Vite]][Vite-url]  
[![react-spring][react-spring]][react-spring-url]  
[![flubber2][flubber2]][flubber2-url]

### Images

SVG images are from

- Figma's [Blobs plugin](https://www.figma.com/community/plugin/739208439270091369/blobs)
- [Lucide Icons](https://lucide.dev/icons/) (with modifications)
- This awsome website https://svgsilh.com/

<br />

---

[product-screenshot]: screenshot.png
[ari-screenshot]: ari.png
[heart-screenshot]: heart.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev/
[react-spring]: https://img.shields.io/badge/react_spring-20232A?style=for-the-badge
[react-spring-url]: https://www.react-spring.dev/
[flubber2]: https://img.shields.io/badge/flubber2-20232A?style=for-the-badge
[flubber2-url]: https://github.com/HannesGitH/flubber2
