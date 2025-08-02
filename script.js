document.querySelector("#info").addEventListener("submit", (e) => {
    e.preventDefault();

    const patient_name = document.querySelector("#p_name").value;
    const patient_mobile = document.querySelector("#p_mobile").value;
    const patient_diseases = document.querySelector("#p_diseases").value;
    const patient_birth_date = new Date(
        document.querySelector("#p_dob").value
    ).toLocaleDateString();
    const patient_email = document.querySelector("#p_email").value;
    const patient_address = document.querySelector("#address").value;

    const patient_rel_name = document.querySelector("#p_r_name").value;
    const patient_rel_mobile = document.querySelector("#p_r_mobile").value;
    const patient_rel_relation = document.querySelector("#p_r_relation").value;

    class Common {
        constructor(who, name, mobile) {
            this.who = who;
            this.name = name;
            this.mobile = mobile;
        }
    }

    class Patient extends Common {
        constructor(who, name, mobile, diseases, birth_date, email, address) {
            super(who, name, mobile);
            this.diseases = diseases;
            this.birth_date = birth_date;
            this.email = email;
            this.address = address;
        }

        output() {
            const row = `<tr>
                <td>${this.name}</td>
                <td>${this.mobile}</td>
                <td>${this.diseases}</td>
                <td>${this.birth_date}</td>
                <td>${this.email}</td>
                <td>${this.address}</td>
            </tr>`;

            document.querySelector("#patient tbody").innerHTML += row;
        }
    }

    class Relative extends Common {
        constructor(who, name, mobile, relation) {
            super(who, name, mobile);
            this.relation = relation;
        }

        output() {
            const row = `<tr>
                <td>${this.name}</td>
                <td>${this.mobile}</td>
                <td>${this.relation}</td>
            </tr>`;
            document.querySelector("#relative tbody").innerHTML += row;
        }
    }

    const p1 = new Patient(
        "Patient",
        patient_name,
        patient_mobile,
        patient_diseases,
        patient_birth_date,
        patient_email,
        patient_address
    );
    p1.output();

    const r1 = new Relative(
        "Relative",
        patient_rel_name,
        patient_rel_mobile,
        patient_rel_relation
    );
    r1.output();

    e.target.reset();
});
