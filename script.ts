let toggles = document.getElementById(`for-skill`) as HTMLButtonElement
const skillss = document.getElementById(`skill`) as HTMLElement

toggles.addEventListener(`click` , ()=> {
  if(skillss.style.display === `none`) {
    skillss.style.display = `block`
  }    else {
    skillss.style.display = `none`
  }
});
