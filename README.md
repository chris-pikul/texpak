# TexPak

Texture packer for building and adjusting component masks for use with PBR
textures as part of a 3D graphics pipeline. This tool is available online, or
offline using Progressive Web App. Everything is performed locally on your machine,
and no uploads are performed to any servers.

It is common when making meshes and objects for use in 3D software (especially
game engines like Unreal or Unity) that you optimize some of the shader parameters
into compact textures. For instance, when working with PBR shaders its common to
drive the metallic/roughness/ambient occlusion values using texture "masks" that
where baked in the 3D software that authored the mesh. You could individually
import each of these individual masks as separate grayscale textures but that
would be wasteful since your shader would need to bind multiple textures. Instead,
since most of these parameters are scalar/float values you could pack them into
a single texture and use the RGB channels as each individual value. That's what
TexPak is for. It allows you to combine multiple grayscale images and pack them
into each RGBA channel for a single image (and thus single texture bind) to use
with your final shader/material.

As an added bonus, there are normal map editing features available for if you need
to swap a channel or increase contrast for the normal map. This is common because
some game engines (such as Unreal) prefer a the green channel flipped in order to
present correctly.

The features for manipulating each channel, such as adding a levels filter, or
contrast adjustment are available in all versions and add some versatility in
adjusting the output textures. It can offer additional optimization (although
micro) as apposed to calculating these adjustments in the shader/material.
