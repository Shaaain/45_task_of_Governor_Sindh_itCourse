"use strict";
let Guest_list = ["Mr Mubashhar", "Mr Ashfaque", "Mr Baqir"];
let InvitationMassage = ", \n you are invited to dinner at my place tonight. \n";
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Hey ${Guest_list[i]}`, InvitationMassage);
}
