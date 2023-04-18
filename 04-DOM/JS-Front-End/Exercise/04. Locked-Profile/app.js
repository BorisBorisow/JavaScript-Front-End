function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));
    buttons
        .forEach((button) => {
            button.addEventListener("click", toggleInfo);
        });

    function toggleInfo(e){
        const btn = e.currentTarget //this === e.currentTarget
        //this is the element from the event
        const currentProfile = btn.parentElement;
        const children = Array.from(currentProfile.children);
        const userInformationDiv = children[9];
        const lockRadioInput = children[4];

        if(lockRadioInput.checked){
            if (btn.textContent === "Show more"){
                userInformationDiv.style.display = "block";
                btn.textContent = "Hide it";
            } else {
                userInformationDiv.style.display = "none";
                btn.textContent = "Show more";
            }
        }
    }

}