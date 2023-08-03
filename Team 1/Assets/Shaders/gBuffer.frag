#version 330 core

uniform sampler2D diffuseTex; // Diffuse texture map
uniform sampler2D bumpTex; //Bump map

in Vertex {
	vec2 texCoord;
	vec3 normal;
	vec3 tangent;
	vec3 binormal;
	vec3 worldPos;
} IN;

out vec4 fragColour [3]; //Our final outputted colours!

void main(void) {
	mat3 TBN = mat3(normalize(IN.tangent),
					normalize(IN.binormal),
					normalize(IN.normal));

	//vec3 normal = texture2D(bumpTex, IN.texCoord).rgb * 2.0 - 1.0;
	//normal = normalize(TBN * normalize(normal ));

	fragColour[0] = texture2D(diffuseTex , IN.texCoord );
	//fragColour[1] = vec4(normal.xyz * 0.5 + 0.5 ,1.0);
		
	fragColour[1] = vec4(normalize(IN.normal), 1.0);	
	
	fragColour[2] = vec4(IN.worldPos, 1.0);	
}