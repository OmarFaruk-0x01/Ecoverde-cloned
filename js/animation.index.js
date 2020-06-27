const animatable_Elements = {
  landing_Text: document.querySelector(".landing .text"),
  searchBox: document.querySelector(".searchBox"),
  _boxIcon_: document.querySelectorAll(".boxIcon"),
  _boxDic_: document.querySelectorAll(".boxDic"),
  s4_sectionTitle: document.querySelector(".section4 .sectionTitle"),
  _s4_products_: document.querySelectorAll(".section4 .colored_card"),
  s5_sectionTitle: document.querySelector(".section5 .sectionTitle"),
  _s5_contents_: document.querySelectorAll(".propContentDiv"),
  s6_sectionTitle: document.querySelector(".section6 .sectionTitle"),
  _s6_contents_: document.querySelectorAll(".section6 .content"),
  _s7_allLeftTexts_: document.querySelector(".section7 > .topDiv > div *")
    .children,
  _s7_bottomColumns_: document.querySelectorAll(".bottomColumn"),
  s8_sectionTitle: document.querySelector(".section8 .sectionTitle"),
  _s8_happyClients_: document.querySelectorAll(".section8 .colored_card"),
  s9_sectionTitle: document.querySelector(".section9 .sectionTitle"),
  _s9_agents_: document.querySelectorAll(".section9 .agent"),
  s10_sectionTitle: document.querySelector(".section10 .sectionTitle"),
  _s10_blog_: document.querySelectorAll(".section10 .blog"),
  _socialLinks_: document.querySelectorAll(".socialLinksList li"),
};

console.log(animatable_Elements);
window.addEventListener("scroll", async () => {
  let pageY = window.pageYOffset;
  const {
    _boxDic_,
    _boxIcon_,
  } = animatable_Elements;
  console.log(pageY);
  // 306 s3

  if (pageY >= 90) {
    Array.from(_boxIcon_).forEach((dic, index) => {
      dic.style.animation = `fade-bottom-to-top .9s ${
        (index-1) * 300
      }ms linear forwards`;
    });
    Array.from(_boxDic_).forEach((dic, index) => {
      dic.style.animation = `fade-bottom-to-top .9s ${
        (index-1) * 300
      }ms linear forwards`;
    });
  }
  // 500 s4
  const { s4_sectionTitle, _s4_products_ } = animatable_Elements;
  if (pageY >= 500) {
    s4_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
  }
  if (pageY >= 690) {
    Array.from(_s4_products_).forEach((prod, index) => {
        prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
    })
  }
  // 1420 s5
  const { s5_sectionTitle, _s5_contents_ } = animatable_Elements;
  if (pageY >= 1300) {
    s5_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
  }
  if (pageY >= 1450) {
    Array.from(_s5_contents_).forEach((prod, index) => {
        prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
    })
  }
  
  // 2140 s6
  const { s6_sectionTitle, _s6_contents_ } = animatable_Elements;
  if (pageY >= 2000) {
    s6_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
  }
  if (pageY >= 2140) {
    Array.from(_s6_contents_).forEach((prod, index) => {
        prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
    })
  }
  // 2850 s7
  const { _s7_allLeftTexts_, _s7_bottomColumns_ } = animatable_Elements;
  if (pageY >= 2700) {
      Array.from(_s7_allLeftTexts_).forEach((prod, index) => {
          prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
        })
    }
    if (pageY >= 3300) {
        Array.from(_s7_bottomColumns_).forEach((prod, index) => {
            prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
        })
    }
    // 3672 s8
    const { s8_sectionTitle, _s8_happyClients_ } = animatable_Elements;
    if (pageY >= 3400) {
      s8_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
    }
    if (pageY >= 3600) {
      Array.from(_s8_happyClients_).forEach((prod, index) => {
          prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
      })
    }
    // 4284 s9
    const { s9_sectionTitle, _s9_agents_ } = animatable_Elements;
    if (pageY >= 4100) {
      s9_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
    }
    if (pageY >= 4150) {
      Array.from(_s9_agents_).forEach((prod, index) => {
          prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
      })
    }
    // 4896 s10
    const { s10_sectionTitle, _s10_blog_ } = animatable_Elements;
    if (pageY >= 4750) {
      s10_sectionTitle.style.animation = `fade-bottom-to-top .8s linear forwards`;
    }
    if (pageY >= 4850) {
      Array.from(_s10_blog_).forEach((prod, index) => {
          prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
      })
    }
    // 5915 5ocial
    const { _socialLinks_ } = animatable_Elements;

        if (pageY >= 5800) {
          Array.from(_socialLinks_).forEach((prod, index) => {
              prod.style.animation = `fade-bottom-to-top .8s ${(index-1) * 200}ms linear forwards`
          })
        }
});
