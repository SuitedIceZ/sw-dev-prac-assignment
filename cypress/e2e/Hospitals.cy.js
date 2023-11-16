describe('Hospital Page Tests', () => {
  it('should play and pause a video and navigate to /hospital', () => {
    cy.visit('/');

    // is video in first page
    cy.get('video').as('videoElement');

    // is video playing
    cy.get('@videoElement').then(($video) => {
      $video.prop('muted', false); //play sound to not be video only background
      $video[0].play()
      expect($video[0].paused).to.be.false;
    });

    // wait 5 sec
    cy.wait(5000);
    
    // pause the video and check if it's paused
    cy.get('@videoElement').then(($video) => {
      $video[0].pause();
      expect($video[0].paused).to.be.true;
    });

    // click the bottom right button navigate to /hospital
    cy.get('button').contains('Select Your Hospital').click();

    // user is at /hospital
    cy.location('pathname').should('include', '/hospital');

    // wait the get hospitals and images to load
    cy.wait(6000);

    // check atlest 3 images
    cy.get('img').its('length').should('be.gte', 3); 
  });
});
