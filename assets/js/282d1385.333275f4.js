"use strict";(self.webpackChunkcelestial=self.webpackChunkcelestial||[]).push([[3872],{5582:(e,t,r)=>{r.d(t,{rt:()=>p,YS:()=>i,SM:()=>s,Ut:()=>m});r(7462);var o=r(7294),n=r(3905),a=(r(3727),r(7083));r(2963),r(8846),r(814);JSON.parse('{"name":"Color","description":"A color composed of components (R, G, B, A) with floating point precision.","constructors":[{"description":"Default Constructor","parameters":[{"name":"R","type":"number","default":"0","description":"Red color percentage (0-1)"},{"name":"G","type":"number","default":"0","description":"Green color percentage (0-1)"},{"name":"B","type":"number","default":"0","description":"Blue color percentage (0-1)"},{"name":"A","type":"number","default":"0","description":"Alpha transparency percentage (0-1)"}]}],"operators":[{"name":"+","operator":"__add","lhs":"Color|number","rhs":"Color|number","return":"Color","description":"Adds two Colors or a number into each component"},{"name":"-","operator":"__sub","lhs":"Color","rhs":"Color|number","return":"Color","description":"Subtracts two Colors or a number from each component"},{"name":"*","operator":"__mul","lhs":"Color|number","rhs":"Color|number","return":"Color","description":"Multiplies two Colors or a number into each component"},{"name":"/","operator":"__div","lhs":"Color","rhs":"Color|number","return":"Color","description":"Divides two Colors or a number from each component"},{"name":"==","operator":"__eq","lhs":"Color","rhs":"Color","return":"boolean","description":"Checks if two Colors have the same values"},{"name":"tostring","operator":"tostring","lhs":"Color","return":"string","description":"Gets a string representation of this struct"}],"properties":[{"name":"R","type":"number","description":"Red color percentage (0-1)"},{"name":"G","type":"number","description":"Green color percentage (0-1)"},{"name":"B","type":"number","description":"Blue color percentage (0-1)"},{"name":"A","type":"number","description":"Alpha transparency percentage (0-1)"}],"functions":[{"name":"ToHex","description":"Gets the Hexadecimal representation of this Color","parameters":[{"name":"appends_transparency","type":"boolean","default":"true","description":"Appends transparency part"}],"return":[{"type":"string","description":"Hexadecimal representation of this Color"}]}],"static_functions":[{"name":"RandomPalette","description":"Returns a random color from Color Palette","parameters":[{"name":"includes_black","type":"boolean","default":"true","description":"Includes blacks in the scope"}],"return":[{"type":"Color","description":"Random color from Color Palette"}]},{"name":"Random","description":"Returns a random color from all color scope","return":[{"type":"Color","description":"Random color from all color scope"}]},{"name":"FromRGBA","description":"Returns the color from 0-255 range values","parameters":[{"name":"r","type":"number","default":"0","description":"Red"},{"name":"g","type":"number","default":"0","description":"Green"},{"name":"b","type":"number","default":"0","description":"Blue"},{"name":"a","type":"number","default":"0","description":"Alpha"}],"return":[{"type":"Color","description":"Final Color"}]},{"name":"FromCYMK","description":"Returns a color from the CYMK format","parameters":[{"name":"c","type":"number","default":"0","description":"Cyan"},{"name":"y","type":"number","default":"0","description":"Yellow"},{"name":"m","type":"number","default":"0","description":"Magenta"},{"name":"k","type":"number","default":"0","description":"Black"},{"name":"a","type":"number","default":"0","description":"Alpha"}],"return":[{"type":"Color","description":"Final Color"}]},{"name":"FromHSL","description":"Returns a color from the HSL format","parameters":[{"name":"h","type":"number","default":"0","description":"Hue"},{"name":"s","type":"number","default":"0","description":"Saturation"},{"name":"l","type":"number","default":"0","description":"Lightness"}],"return":[{"type":"Color","description":"Final Color"}]},{"name":"FromHSV","description":"Returns a color from the HSV format","parameters":[{"name":"h","type":"number","default":"0","description":"Hue"},{"name":"s","type":"number","default":"0","description":"Saturation"},{"name":"v","type":"number","default":"0","description":"Value"}],"return":[{"type":"Color","description":"Final Color"}]},{"name":"FromHEX","description":"Returns a color from the Hexadecimal format","parameters":[{"name":"hex","type":"string","description":"Hexadecimal"}],"return":[{"type":"Color","description":"Final Color"}]}]}'),JSON.parse('{"name":"Matrix","description":"A Matrix is an array of numbers this can be used for geometric and positional calculations. This is mainly used internally.","constructors":[{"description":"Default Constructor","parameters":[{"name":"rotation","type":"Rotator","description":"The rotation of the matrix"},{"name":"origin","type":"Vector","description":"The origin of the matrix"}]}],"functions":[{"name":"TransformVector","description":"Transform the vector with the matrix","return":[{"type":"Vector","description":"The new vector"}],"parameters":[{"type":"Vector","name":"vector","description":"The vector who will be transformed"}]},{"name":"GetTransposed","description":"Returns a new matrix transposed (<a href=\\"https://en.wikipedia.org/wiki/Transpose\\">Wikipedia</a>)","return":[{"type":"Matrix","description":"The matrix transpoosed"}]}]}'),JSON.parse('{"name":"Rotator","description":"A container for rotation information (Pitch, Yaw, Ro). All rotation values are stored in degrees.","operators":[{"name":"+","operator":"__add","lhs":"Rotator|number","rhs":"Rotator|number","return":"Rotator"},{"name":"-","operator":"__sub","lhs":"Rotator|number","rhs":"Rotator|number","return":"Rotator"},{"name":"*","operator":"__mul","lhs":"Rotator|number","rhs":"Rotator|number","return":"Rotator"}],"constructors":[{"description":"Default Constructor","parameters":[{"name":"Pitch","type":"number","default":"0","description":"Pitch"},{"name":"Yaw","type":"number","default":"0","description":"Yaw"},{"name":"Roll","type":"number","default":"0","description":"Roll"}]}],"properties":[{"name":"Pitch","type":"number","description":"Rotation around the right axis (around Y axis), Looking up and down (0=Straight Ahead, +Up, -Down)"},{"name":"Yaw","type":"number","description":"Rotation around the up axis (around Z axis), Running in circles 0=East, +North, -South."},{"name":"Roll","type":"number","description":"Rotation around the forward axis (around X axis), Tilting your head, 0=Straight, +Clockwise, -CCW."}],"functions":[{"name":"GetForwardVector","description":"Get the forward (X) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the forward direction"}]},{"name":"GetRightVector","description":"Get the right (Y) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the right direction"}]},{"name":"GetUpVector","description":"Get the up (Z) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the up direction"}]},{"name":"RotateVector","description":"Rotate a vector rotated by this rotator.","parameters":[{"type":"Vector","name":"vector","description":"the vector to rotate by the Rotator"}],"return":[{"type":"Vector","description":"the rotated vector"}]},{"name":"Normalize","description":"In-place normalize, removes all winding and creates the \u201cshortest route\u201d rotation."},{"name":"UnrotateVector","description":"Returns the vector rotated by the inverse of this rotator.","parameters":[{"type":"Vector","name":"vector","description":"The vector to rotate by the inverse of the Rotator"}],"return":[{"type":"Vector","description":"the unrotated vector"}]},{"name":"Quaternion","description":"Get Rotation as a quaternion.","return":[{"type":"Quat","description":"the rotation as a quaternion"}]},{"name":"GetNormalized","description":"Returns a new Rotator normalized.","return":[{"type":"Rotator","description":"the normalized Rotator"}]},{"name":"IsNearlyZero","description":"Checks whether rotator is near to zero within a specified tolerance","parameters":[{"type":"number","name":"tolerance","description":"Tolerance to check","default":"0.000001"}],"return":[{"type":"boolean","description":"whether the rotator is nearly zero"}]},{"name":"IsZero","description":"Checks whether all components of the rotator are exactly zero","return":[{"type":"boolean","description":"whether the rotator is exactly zero"}]}],"static_functions":[{"name":"Random","description":"Generates a random rotation, with optional random roll","parameters":[{"type":"boolean","name":"roll","description":"Whether to use a random roll in the rotator, otherwise uses 0 for roll","default":"false"}],"return":[{"type":"Rotator","description":"the random rotation"}]}]}'),JSON.parse('{"name":"Quat","description":"Floating point Quaternion that can represent a rotation about an axis in 3-D space","operators":[{"name":"+","operator":"__add","lhs":"Quat|number","rhs":"Quat|number","return":"Quat"},{"name":"-","operator":"__sub","lhs":"Quat|number","rhs":"Quat|number","return":"Quat"},{"name":"*","operator":"__mul","lhs":"Quat|number","rhs":"Quat|number","return":"Quat"}],"constructors":[{"description":"Default Constructor","parameters":[{"name":"X","type":"number","default":"0","description":"The quaternion\'s X-component"},{"name":"Y","type":"number","default":"0","description":"The quaternion\'s Y-component"},{"name":"Z","type":"number","default":"0","description":"The quaternion\'s Z-component"},{"name":"W","type":"number","default":"0","description":"The quaternion\'s W-component"}]}],"properties":[{"name":"X","type":"number","description":"The quaternion\'s X-component"},{"name":"Y","type":"number","description":"The quaternion\'s Y-component"},{"name":"Z","type":"number","description":"The quaternion\'s Z-component"},{"name":"W","type":"number","description":"The quaternion\'s W-component"}],"functions":[{"name":"Normalize","description":"In place normalize this Quaternion"},{"name":"Rotator","description":"Get the Rotator representation of this Quaternion","return":[{"type":"Rotator","description":"Rotator representation of this Quaternion"}]},{"name":"Inverse","description":"Returns the inverse of this Quaternion","return":[{"type":"Quat","description":"Inverse of this Quaternion"}]}]}'),JSON.parse('{"name":"Vector","description":"A Vector composed of components (X, Y, Z) with floating point precision. Used mainly for entity position.","operators":[{"name":"+","operator":"__add","lhs":"Vector|number","rhs":"Vector|number","return":"Vector"},{"name":"-","operator":"__sub","lhs":"Vector|number","rhs":"Vector|number","return":"Vector"},{"name":"*","operator":"__mul","lhs":"Vector|number","rhs":"Vector|number","return":"Vector"},{"name":"/","operator":"__div","lhs":"Vector","rhs":"Vector|number","return":"Vector"},{"name":"^","operator":"__pow","lhs":"Vector","rhs":"Vector|number","return":"Vector"}],"constructors":[{"description":"Default Constructor","parameters":[{"name":"X","type":"number","default":"0","description":"X Coordinate"},{"name":"Y","type":"number","default":"0","description":"Y Coordinate"},{"name":"Z","type":"number","default":"0","description":"Z Coordinate"}]}],"properties":[{"name":"X","type":"number","description":"X Coordinate"},{"name":"Y","type":"number","description":"Y Coordinate"},{"name":"Z","type":"number","description":"Z Coordinate"}],"functions":[{"name":"Equals","description":"Check against another vector for equality, within specified error limits","description_long":"Check if the vector is equal to another vector, within specified error limits","return":[{"type":"boolean","description":"Are the vectors equal or not"}],"parameters":[{"type":"Vector","name":"other","description":"The vector to compare to"},{"type":"number","name":"tolerance","default":"0.000001","description":"The error limits"}]},{"name":"Distance","description":"Distance between two points","description_long":"Returns the distance of 2 vectors","return":[{"type":"number","description":"The distance betweem the vectors"}],"parameters":[{"type":"Vector","name":"other","description":"The vector to get the distance to"}]},{"name":"DistanceSquared","description":"Squared distance between two points","description_long":"Return the squared distance of 2 vectors","return":[{"type":"number","description":"The squared distance betweem the vectors"}],"parameters":[{"type":"Vector","name":"other","description":"The vector to get the squared distance to"}]},{"name":"GetUnsafeNormal","description":"Calculates normalized version of vector without checking for zero length","description_long":"Returns the normalized version of vector without checking for zero length","return":[{"type":"Vector","description":"The unsafe normal"}],"parameters":[]},{"name":"GetSafeNormal","description":"Gets a normalized copy of the vector, checking it is safe to do so based on the length","description_long":"Returns a normalized copy of the vector, checking it is safe to do so based on the length","return":[{"type":"Vector","description":"The safe normal"}],"parameters":[]},{"name":"IsNearlyZero","description":"Checks whether vector is near to zero within a specified tolerance","return":[{"type":"boolean","description":"If the bool is near to zero"}],"parameters":[{"type":"number","name":"tolerance","default":"0.000001","description":"The error limits"}]},{"name":"IsZero","description":"Checks whether all components of the vector are exactly zero","return":[{"type":"boolean","description":"If all components of the vector are exactly zero"}]},{"name":"Normalize","description":"Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not","return":[{"type":"boolean","description":"If the vector has been modified"}]},{"name":"Size","description":"Get the length (magnitude) of this vector","return":[{"type":"number","description":"The lenght of the vector"}]},{"name":"SizeSquared","description":"Get the squared length of this vector","return":[{"type":"number","description":"The squared length of the vector"}]},{"name":"Rotation","description":"Returns the orientation corresponding to the direction in which the vector points","return":[{"type":"Rotator","description":"The orientation of the vector"}]}]}'),JSON.parse('{"name":"Vector2D","description":"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen.","operators":[{"name":"+","operator":"__add","lhs":"Vector2D|number","rhs":"Vector2D|number","return":"Vector2D"},{"name":"-","operator":"__sub","lhs":"Vector2D|number","rhs":"Vector2D|number","return":"Vector2D"},{"name":"*","operator":"__mul","lhs":"Vector2D|number","rhs":"Vector2D|number","return":"Vector2D"},{"name":"/","operator":"__div","lhs":"Vector2D","rhs":"Vector2D|number","return":"Vector2D"}],"constructors":[{"description":"Default Constructor","parameters":[{"name":"X","type":"number","default":"0","description":"X Coordinate"},{"name":"Y","type":"number","default":"0","description":"Y Coordinate"}]}],"properties":[{"name":"X","type":"number","description":"X Coordinate"},{"name":"Y","type":"number","description":"Y Coordinate"}]}');const i=e=>{let{title:t,description:r,href:o,image_src:a}=e;return(0,n.kt)("a",{class:"card-link",href:o.startsWith("http")?o:`http://localhost:3000/docs/${o}`},(0,n.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,t),(0,n.kt)("p",null,r))},s=e=>{let{children:t,href:r}=e;return(0,n.kt)("a",{class:"reference-link",href:r.startsWith("http")?r:`http://localhost:3000/docs/${r}`},t,(0,n.kt)("span",null,r))},c=(e,t)=>(0,n.kt)(a.ZP,{maxWidth:400,animation:"scale-subtle",placement:"left",content:(0,n.kt)(o.Fragment,null,(0,n.kt)("h3",null,e),(0,n.kt)("span",{dangerouslySetInnerHTML:{__html:t}})),mdxType:"Tippy"}),p={Number:()=>c("number","The number type represents real (double-precision floating-point) numbers."),Integer:()=>c("integer","Whole numbers without any fractional parts."),Float:()=>c("float","Floating-point type with decimal points."),String:()=>c("string","Strings have the usual meaning: a sequence of characters."),Boolean:()=>c("boolean","The boolean type has two values, false and true, which represent the traditional boolean values."),Table:()=>c("table","The table type implements associative arrays."),Iterator:()=>c("iterator","Iterator allows you to traverse elements of a table with <code>for k, v in ipairs()</code>."),Any:()=>c("any","We use any here in the Docs to represent that any Type can be used."),Function:()=>c("function","Function type."),Nil:()=>c("nil","Nil is a type with a single value, nil, whose main property is to be different from any other value."),VarArgs:()=>c("varargs","Variadic list of values.")},m={Vector:()=>BaseStruct("Vector"),Rotator:()=>BaseStruct("Rotator"),Color:()=>BaseStruct("Color"),Quat:()=>BaseStruct("Quat"),Vector2D:()=>BaseStruct("Vector2D")}},6547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var o=r(7462),n=(r(7294),r(3905)),a=r(5582);const i={id:"welcome",title:"\ud83d\udc4b Welcome",description:"Welcome to the new nanos world Official Documentation!",keywords:["docs"],sidebar_position:0,slug:"/"},s=void 0,c={unversionedId:"welcome",id:"welcome",title:"\ud83d\udc4b Welcome",description:"Welcome to the new nanos world Official Documentation!",source:"@site/docs/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/docs/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/welcome.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"welcome",title:"\ud83d\udc4b Welcome",description:"Welcome to the new nanos world Official Documentation!",keywords:["docs"],sidebar_position:0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Celestial does not appear on injection",permalink:"/docs/docs/FAQ/cel_does_not_appear_on_injection"}},p={},m=[],l={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the new Celestial Official Documentation!"),(0,n.kt)(a.SM,{href:"FAQ/cel_does_not_appear_on_injection",mdxType:"ReferenceLink"},"\ud83d\udccc FAQ"))}d.isMDXComponent=!0}}]);