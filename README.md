# CSC8507-Team-1

 The project was created with a team of 8 students to create a splatoon like game prototype which was cross platform with PS4
 and also multiplayer in a two month period.

# My contributions to the project:
- The surface painting system from storing paint data, applying paint in data, visually applying the paint and detecting it. 
###	- Scripts where this is done/utilised:
		- CSC8503: Player.cpp/.h, TutorialGame.cpp/.h
		- Assets: compute.comp, detection.comp, scene.frag, scene.vert
 - Generic API calling system to allow for cross platform API calls. - Sadly, wasn't fully utilised since the PS4 renderer didn't get fully into the final build.
###	- Scripts where this is done/utilised:
		- NCLCoreClasses: TextureLoader.cpp/h, MeshMaterial.cpp/.h
		- CSC8503CoreClasses: RenderObject.cpp/h
		- CSC8503: GameTechRenderer.cpp/.h

# Controls:
WASD for movement
Space to jump
Left click to paint (limited ammo then reloads)
2 to switch active paint

# Starting a multiplayer lobby:

Start up the client via the CSC8503.exe found in Team 1 -> x64 -> Release and select multiplayer and then server then tab out and open the other two or more clients in the
file explorer selecting multiplayer and then client for both, then switch back to the server click 'P' and now you can see
the other players and mess around with syncronised paint etc.

