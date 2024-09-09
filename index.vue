<template>
  <div id="app">
    <div style="display: table; margin: 16px auto;" id="a">
      <div id="b">
        <pre>
          .-.    
          oo|   Welcome...
          /`'\   this website is inspired by kisslinux.org  
         (\_;/)  -----------------------------------------
                 <a :href="githubLink" class="t">this website is open source btw</a>
          _________________________________________________
  
                                                         ____
                                                        |    |    
  .--------------------------------------------------------.|    |    
  |  Hi, im datatype alex = uran | ium                      |    |    
  |  <a :href="nixosLink" class="t">im a NixOS User</a>                                        |    |   
  |  i love music,reading,computers,science,coding        ._|____|_.  
  '-------------------------------------------------------\\|o_o |    
                                                        |:_/ |    
                                                       //   \ \  
                                                      (|     | )
  
                    Projects/Random Stuff
  +-----------------------------------------------+
  | 1. <a :href="projects.nixosConf" class="t">NixOS Conf</a>                                 | 
  | 2. <a :href="projects.csaf" class="t">csaf</a>                                       |  
  | 3. <a :href="projects.duckducktux" class="t">duckducktux</a>                                |
  |                                               |
  |                                               |
  +-----------------------------------------------+    

                                                          
                    Experiences/Other Pages
  +--------------------------------------------------------+  
  | 1. <a :href="experiences.nixos" class="t">Personal Experience With NixOS</a>                      |
  | 2. <a :href="experiences.skills" class="t">Skills</a>                                              |
  | 3. WAIT...                                             |            
  | 4. WAIT...                                             |
  +--------------------------------------------------------+
        
  <a :href="listeningLink" class="t">What Am I Listening To?</a>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      githubLink: 'https://github.com/alexpkgs/alexpkgs.github.io/',
      nixosLink: 'https://nixos.org/',
      listeningLink: '/listeningtomusic.html',
      projects: {
        nixosConf: 'https://github.com/alexpkgs/glflake',
        csaf: 'https://github.com/alexpkgs/csaf',
        duckducktux: 'https://github.com/alexpkgs/duckducktux'
      },
      experiences: {
        nixos: '/nixos.html',
        skills: '/skill.html'
      }
    };
  }
}
</script>

<style scoped>
body {
  overflow-y: scroll;
  font: 16px monospace, monospace;
}
pre {
  margin: 0;
  overflow-x: hidden;
}
.t {
  text-decoration: none;
}
@media (max-width: 999px) {
  body {
    font-size: 1.94vw;
  }
}
@media (prefers-color-scheme: dark) {
  body {
    background: #000;
    color: #fff;
  }
  a {
    color: #6CF;
  }
  #l {
    color: #F33;
  }
  #g {
    filter: invert(1);
  }
}
img, #b {
  max-width: 80ch;
}
span {
  display: inline-block;
}
</style>
