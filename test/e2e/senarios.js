describe('Job Tracker Application', function(){
  describe('Home Page',function(){

    beforeEach(function(){
      browser().navigateTo('/');
    });

    it('should load the main template', function(){
        expect(element('container').html()).toContain('partials/navbar');
    });
  });
});