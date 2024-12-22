const conjugationTemplates = {
    1: {
        Present: "Je XXXX<b>e</b>, Tu XXXX<b>es</b>, Il/elle XXXX<b>e</b>, Nous XXXX<b>ons</b>, Vous XXXX<b>ez</b>, Ils/elles XXXX<b>ent</b>",
        Futur: "Je XXXX<b>erai</b>, Tu XXXX<b>eras</b>, Il/elle XXXX<b>era</b>, Nous XXXX<b>erons</b>, Vous XXXX<b>erez</b>, Ils/elles XXXX<b>eront</b>",
        Passe: "Je XXXX<b>ai</b>, Tu XXXX<b>as</b>, Il/elle XXXX<b>a</b>, Nous XXXX<b>âmes</b>, Vous XXXX<b>âtes</b>, Ils/elles XXXX<b>èrent</b>"
    },
    2: {
        Present: "Je XXXX<b>is</b>, Tu XXXX<b>is</b>, Il/elle XXXX<b>it</b>, Nous XXXX<b>issons</b>, Vous XXXX<b>issez</b>, Ils/elles XXXX<b>issent</b>",
        Futur: "Je XXXX<b>irai</b>, Tu XXXX<b>iras</b>, Il/elle XXXX<b>ira</b>, Nous XXXX<b>irons</b>, Vous XXXX<b>irez</b>, Ils/elles XXXX<b>iront</b>",
        Passe: "Je XXXX<b>is</b>, Tu XXXX<b>is</b>, Il/elle XXXX<b>it</b>, Nous XXXX<b>îmes</b>, Vous XXXX<b>îtes</b>, Ils/elles XXXX<b>irent</b>"
    }
};

function conjuguer() {
    const verb = document.getElementById('verbc').value.toLowerCase();
    const tense = document.getElementById('tpsc').value;
    const group = document.getElementById('group').value;

    if (!verb || !tense || !group) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const verbRoot = verb.slice(0, -2);

    if ((group == 1 && verb.endsWith('er')) || (group == 2 && verb.endsWith('ir'))) {
        // Si un seul temps est sélectionné
        if (tense === "Present") {
            document.getElementById('rp1').innerHTML = conjugationTemplates[group][tense].replace(/XXXX/g, verbRoot);
            document.getElementById('rp2').innerHTML = "";
            document.getElementById('rp3').innerHTML = "";
        } else if (tense === "Futur") {
            document.getElementById('rp2').innerHTML = conjugationTemplates[group][tense].replace(/XXXX/g, verbRoot);
            document.getElementById('rp1').innerHTML = "";
            document.getElementById('rp3').innerHTML = "";
        } else if (tense === "Passe") {
            document.getElementById('rp3').innerHTML = conjugationTemplates[group][tense].replace(/XXXX/g, verbRoot);
            document.getElementById('rp1').innerHTML = "";
            document.getElementById('rp2').innerHTML = "";
        } else if (tense === "Tous les temps") {
            // Si "Tous les temps" est sélectionné, afficher chaque temps dans son div respectif
            document.getElementById('rp1').innerHTML = conjugationTemplates[group]["Present"].replace(/XXXX/g, verbRoot);
            document.getElementById('rp2').innerHTML = conjugationTemplates[group]["Futur"].replace(/XXXX/g, verbRoot);
            document.getElementById('rp3').innerHTML = conjugationTemplates[group]["Passe"].replace(/XXXX/g, verbRoot);
        }
    } else {
        alert("Verbe non valide pour le groupe sélectionné.");
    }
}


function generateAllTenses(root, group) {
    return Object.values(conjugationTemplates[group]).map(template => template.replace(/XXXX/g, root)).join('<br><br>');
}
