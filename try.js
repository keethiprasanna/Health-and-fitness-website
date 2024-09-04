document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");
    const profileName = document.getElementById("profile-name");
    const profilePosition = document.getElementById("profile-position");
    const profileBio = document.getElementById("profile-bio");
    const teamProfile = document.querySelector(".team-profile");

    teamMembers.forEach(member => {
        member.addEventListener("mouseover", function() {
            const name = member.getAttribute("data-name");
            const position = member.getAttribute("data-position");
            const bio = member.getAttribute("data-bio");

            profileName.textContent = name;
            profilePosition.textContent = position;
            profileBio.textContent = bio;
            teamProfile.style.display = "block";
        });

        member.addEventListener("mouseout", function() {
            teamProfile.style.display = "none";
        });

        member.addEventListener("click", function() {
            alert(`${member.getAttribute("data-name")}'s full profile will be available soon!`);
        });
    });
});
