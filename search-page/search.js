//아래는 무한스크롤 코드입니다.

let count = 3;

window.addEventListener("scroll", (e) => {
    const isScrollEnd = window.innerHeight + window.scrollY + 500 > document.body.offsetHeight;

    if (isScrollEnd && count < 5) {
        for (let i = 0; i < 3; i++) {

            const $img1 = document.createElement("div");
            const $img2 = document.createElement("div");
            const $img3 = document.createElement("div");
            const $img4 = document.createElement("div");
            const $img5 = document.createElement("div");

            const $img12 = document.createElement("div");
            const $img22 = document.createElement("div");
            const $img32 = document.createElement("div");
            const $img42 = document.createElement("div");
            const $img52 = document.createElement("div");

            const $item2 = document.createElement("div");
            const $item2_2 = document.createElement("div");

            const $item22 = document.createElement("div");
            const $item2_22 = document.createElement("div");

            const $item5 = document.createElement("div");

            const $item5_2 = document.createElement("div");

            $img1.className = "image img1";
            $img2.className = "image img2";
            $img3.className = "image img3";
            $img4.className = "image img4";
            $img5.className = "images img5";

            $img12.className = "image img1";
            $img22.className = "image img2";
            $img32.className = "image img3";
            $img42.className = "image img4";
            $img52.className = "images img5";

            $item2.className = "item2";
            $item2_2.className = "item2-2";

            $item22.className = "item2";
            $item2_22.className = "item2-2";

            $item5.className = "item5";
            $item5_2.className = "item5-2";

            $item2.appendChild($img1);
            $item2.appendChild($img2);
            $item5.appendChild($item2);
            $item2_2.appendChild($img3);
            $item2_2.appendChild($img4);
            $item5.appendChild($item2_2);
            $item5.appendChild($img5);

            document.querySelector(".content").append($item5);

            $item5_2.appendChild($img52);
            $item22.appendChild($img12);
            $item22.appendChild($img22);
            $item5_2.appendChild($item22);
            $item2_22.appendChild($img32);
            $item2_22.appendChild($img42);
            $item5_2.appendChild($item2_22);

            document.querySelector(".content").append($item5_2);
        }
    }
});