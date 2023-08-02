/* eslint-disable no-console */

/**
 * Greets the user by printing a message in the console.
 * @param name The user's name.
 */
export const homeIndustryGrid = () => {
  const industries = document.querySelectorAll('.icon_wrap');
  const industriesContent = document.querySelectorAll('.home_industry_content');

  industries[0].classList.add('active');
  industriesContent[0].classList.add('active');

  industries.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActiveCard(card);
      setActiveContent(index);
    });
  });

  // Function to set the active card
  function setActiveCard(activeCard: any) {
    industries.forEach((card) => card.classList.remove('active'));
    activeCard.classList.add('active');
  }
  function setActiveContent(index: any) {
    industriesContent.forEach((content) => content.classList.remove('active'));
    industriesContent[index].classList.add('active');
  }
};
