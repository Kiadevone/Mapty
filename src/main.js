import "./style.css";
("use strict");

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form-input-type");
const inputDistance = document.querySelector(".form-input-distance");
const inputDuration = document.querySelector(".form-input-duration");
const inputElevation = document.querySelector(".form-input-elevation");
const inputCadence = document.querySelector(".form-input-cadence");
const workoutsHtml = document.querySelector(".div-workouts");
const buttonCurrentLocation = document.querySelector(".button-currentLocation");
const buttonsHtml = `<div
              class="flex rounded-full bg-slate-100/30 absolute right-2 top-2 gap-1"
            >
              <button class="rounded-full px-1 py-1 cursor-pointer button-trash">
                <svg class="w-4 h-4"xmlns="http://www.w3.org/2000/svg"x="0px"y="0px"width="100"height="100"viewBox="0,0,256,256"
                >
                  <defs>
                    <linearGradient x1="18.405"y1="10.91"x2="33.814"y2="43.484"gradientUnits="userSpaceOnUse"
                      id="color-1_pre7LivdxKxJ_gr1"
                    >
                      <stop offset="0" stop-color="#cfd6d8"></stop>
                      <stop offset="1" stop-color="#cfd6d8"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none"fill-rule="nonzero"stroke="none"stroke-width="1"stroke-linecap="butt"stroke-linejoin="miter"stroke-miterlimit="10"stroke-dasharray=""stroke-dashoffset="0"font-family="none"font-weight="none"font-size="none"text-anchor="none"style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path
                        d="M39,10l-2.835,31.181c-0.093,1.03 -0.957,1.819 -1.991,1.819h-20.348c-1.034,0 -1.898,-0.789 -1.992,-1.819l-2.834,-31.181z"fill="url(#color-1_pre7LivdxKxJ_gr1)"
                      ></path>
                      <path
                        d="M32,7c0,-1.105 -0.895,-2 -2,-2h-12c-1.105,0 -2,0.895 -2,2c0,0 0,0.634 0,1h16c0,-0.366 0,-1 0,-1z"fill="#cfd6d8"
                      ></path>
                      <path
                        d="M7,9.886v0c0,-0.523 0.358,-0.974 0.868,-1.086c2.305,-0.507 8.895,-1.8 16.132,-1.8c7.237,0 13.827,1.293 16.132,1.8c0.51,0.112 0.868,0.563 0.868,1.086v0c0,0.615 -0.499,1.114 -1.114,1.114h-31.772c-0.615,0 -1.114,-0.499 -1.114,-1.114z" fill="#cfd6d8"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button class="rounded-full px-1 py-1 cursor-pointer bg-white button-edit">
                <svg class="w-4 h-4"xmlns="http://www.w3.org/2000/svg"x="0px"y="0px"width="100"height="100"viewBox="0,0,256,256"
                >
                  <g fill="#a4b4ac"fill-rule="nonzero"stroke="none"stroke-width="1"stroke-linecap="butt"stroke-linejoin="miter"stroke-miterlimit="10"stroke-dasharray=""stroke-dashoffset="0"font-family="none"font-weight="none"font-size="none"text-anchor="none"style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M43.125,2c-1.24609,0 -2.48828,0.48828 -3.4375,1.4375l-0.8125,0.8125l6.875,6.875c-0.00391,0.00391 0.8125,-0.8125 0.8125,-0.8125c1.90234,-1.90234 1.89844,-4.97656 0,-6.875c-0.95312,-0.94922 -2.19141,-1.4375 -3.4375,-1.4375zM37.34375,6.03125c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-32.4375,32.46875c-0.12891,0.11719 -0.22656,0.26953 -0.28125,0.4375l-2,7.5c-0.08984,0.34375 0.01172,0.70703 0.26172,0.95703c0.25,0.25 0.61328,0.35156 0.95703,0.26172l7.5,-2c0.16797,-0.05469 0.32031,-0.15234 0.4375,-0.28125l32.46875,-32.4375c0.39844,-0.38672 0.40234,-1.02344 0.01563,-1.42187c-0.38672,-0.39844 -1.02344,-0.40234 -1.42187,-0.01562l-32.28125,32.28125l-4.0625,-4.0625l32.28125,-32.28125c0.30078,-0.28906 0.39063,-0.73828 0.22266,-1.12109c-0.16797,-0.38281 -0.55469,-0.62109 -0.97266,-0.59766c-0.03125,0 -0.0625,0 -0.09375,0z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>`;

class Workouts {
  clicks = 0;
  // prettier-ignore
  month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December",
  ];
  date = new Date();
  id = Date.now() + "".slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDiscriptipn() {
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      this.month[this.date.getMonth()]
    } ${this.date.getDate()}`;
    return this.description;
  }

  click() {
    this.clicks++;
  }
}

class Cycling extends Workouts {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calSpeed();
    this._setDiscriptipn();
  }

  calSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

class Running extends Workouts {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDiscriptipn();
  }

  calPace() {
    this.speed = this.duration / this.distance;
    return this.speed;
  }
}

class App {
  #zoomMap = 13;
  #map;
  #mapEvent;
  #workouts = [];
  #markers = [];
  allWorkoutEl;

  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    workoutsHtml.addEventListener("click", this._gotoPopup.bind(this));
    workoutsHtml.addEventListener("click", this._deleteItem.bind(this));
    workoutsHtml.addEventListener("click", this._editItem.bind(this));
    this._getlocalStorage();
  }

  _getPosition() {
    navigator.geolocation?.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert("Can't access your position");
      }
    );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    this.coords = [latitude, longitude];
    this.#map = L.map("map").setView(this.coords, this.#zoomMap);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#workouts.forEach((work, i) => {
      this._renderMarker(work, work.coords);
    });
    this.#map.on("click", this._showForm.bind(this));
    this._currentLocaton(latitude, longitude);
  }

  _currentLocaton(latitude, longitude) {
    const zoom = this.#zoomMap;
    const map = this.#map;
    buttonCurrentLocation.addEventListener("click", function () {
      map.setView([latitude, longitude], zoom);
    });
  }

  _renderMarker(workout, arrayLocation) {
    const marker = L.marker(arrayLocation)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 250,
          autoClose: true,
          closeOnClick: true,
          className: `${workout.type}-popup`,
        }).setContent(`<div>
                ${workout.type === "cycling" ? "🚴" : "🏃‍♂️"} ${
          workout.type
        } on ${workout.month[workout.date.getMonth()]} ${workout.date.getDate()}
            </div>`)
      )
      .openPopup();
    this.#markers.push(marker);
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    this.allWorkoutEl = [...workoutsHtml.querySelectorAll(".workout")];
    if (!form.classList.contains("hidden")) return;
    form.classList.remove(
      "transform",
      "transition-all",
      "ease-out",
      "duration-1000",
      "translate-y-6"
    );
    form.classList.remove("hidden");
    setTimeout(() => {
      form.classList.add(
        "transform",
        "transition-all",
        "ease-out",
        "duration-1000",
        "translate-y-6"
      );
    });

    this.allWorkoutEl.forEach((el) => {
      el.classList.remove(
        "transform",
        "transition-all",
        "ease-out",
        "duration-1000",
        "-translate-y-4"
      );
    });

    setTimeout(() => {
      this.allWorkoutEl.forEach((el) => {
        el.classList.add(
          "transform",
          "transition-all",
          "ease-out",
          "duration-1000",
          "-translate-y-4"
        );
      });
    });
    inputDistance.focus();
  }

  _hideForm() {
    this.allWorkoutEl = [...workoutsHtml.querySelectorAll(".workout")];
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        "";
    form.classList.add("hidden");
    this.allWorkoutEl.forEach((el) => {
      el.classList.remove(
        "transform",
        "transition-all",
        "ease-out",
        "duration-700",
        "-translate-y-4"
      );
    });
    setTimeout(() => {
      this.allWorkoutEl.forEach((el) => {
        el.classList.add(
          "transform",
          "transition-all",
          "ease-out",
          "duration-1000",
          "-translate-y-4"
        );
      });
    });
  }

  _toggleElevationField() {
    inputElevation.closest(".form-hidden").classList.toggle("hidden");
    inputCadence.closest(".form-hidden").classList.toggle("hidden");
  }

  _newWorkout(e) {
    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;
    this.coords = [lat, lng];
    // validation inputs
    const validation = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPostive = (...inputs) => inputs.every((inp) => inp > 0);
    // getting data
    let workout;
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !validation(distance, duration, cadence) ||
        !allPostive(distance, duration)
      )
        return alert("invalid number!");
      workout = new Running(this.coords, distance, duration, cadence);
    }
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !validation(distance, duration, elevation) ||
        !allPostive(distance, duration)
      )
        return alert("invalid number!");
      workout = new Cycling(this.coords, distance, duration, elevation);
    }
    this.#workouts.push(workout);
    this._renderMarker(workout, this.coords);
    this._renderWorkout(workout);
    this._hideForm(this.allWorkoutEl);
    this._setlocalStorage();
  }

  _setlocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _getlocalStorage() {
    //localStorage.clear();
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;
    //this.#workouts = data;
    let newWorkout;
    this.#workouts = data.map((workout) => {
      if (workout.type === "running") {
        newWorkout = new Running(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.cadence
        );
      } else if (workout.type === "cycling") {
        newWorkout = new Cycling(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.elevationGain
        );
      }
      newWorkout.id = workout.id;
      return newWorkout;
    });
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }

  _renderWorkout(workout) {
    let html;
    if (workout.type === "cycling") {
      html = `
      <div data-id="${workout.id}"
        class="relative flex flex-col mx-20 bg-stone-500/50 lg:py-6 lg:px-5 gap-5 mt-4 rounded-md border-l-10 border-orange-500  workout workout-${
          workout.type
        }"
      > 
        ${buttonsHtml}
        <div class="text-white text-xl font-semibold lg:px-3">
          ${workout._setDiscriptipn()}
        </div>
        <div class="flex justify-around">
          <div class="flex gap-1">
            <p>${workout.type === "running" ? "🏃‍♂️" : "🚴"}</p>
            <p class="font-semibold text-white">
              ${workout.distance} <span class="text-xs text-slate-300">Km</span>
            </p>
          </div>
          <div class="flex gap-1">
            <p>🕛</p>
            <p class="font-semibold text-white">
              ${
                workout.duration
              } <span class="text-xs text-slate-300">Min</span>
            </p>
          </div>
          <div class="flex gap-1">
            <p>⚡</p>
            <p class="font-semibold text-white">
              ${workout
                .calSpeed()
                .toFixed()} <span class="text-xs text-slate-300">Min/Km</span>
            </p>
          </div>
          <div class="flex gap-1">
            <p>🏔️</p>
            <p class="font-semibold text-white">
            ${workout.elevationGain}
               <span class="text-xs text-slate-300">M</span>
            </p>
          </div>
        </div>
      </div>
`;
    } else {
      html = `          
         <div data-id="${workout.id}"
                class="relative flex flex-col mx-20 bg-stone-500/50 lg:py-6 lg:px-5 gap-5 mt-4 rounded-md border-l-10 border-green-500 
               workout workout-running"
            >
            ${buttonsHtml}
              <div class="text-white text-xl font-semibold lg:px-3">
            ${workout._setDiscriptipn()}
            </div>
            <div class="flex justify-around">
              <div class="flex gap-1">
                <p>${workout.type === "running" ? "🏃‍♂️" : "🚴"}</p>
                <p class="font-semibold text-white">
                ${
                  workout.distance
                } <span class="text-xs text-slate-300">Km</span>
                </p>
              </div>
              <div class="flex gap-1">
                <p>🕛</p>
                <p class="font-semibold text-white">
                ${
                  workout.duration
                } <span class="text-xs text-slate-300">Min</span>
                </p>
              </div>
              <div class="flex gap-1">
                <p>⚡</p>
                <p class="font-semibold text-white">
                   ${workout
                     .calPace()
                     .toFixed()}  <span class="text-xs text-slate-300">Min/Km</span>
                </p>
              </div>
              <div class="flex gap-1">
                <p>🦶</p>
                <p class="font-semibold text-white">
                ${workout.cadence}
                <span class="text-xs text-slate-300">M</span>
                </p>
              </div>
            </div>
          </div>`;
    }
    workoutsHtml.insertAdjacentHTML("afterbegin", html);
  }

  _gotoPopup(e) {
    const workoutEl = e.target.closest(".workout");
    if (!workoutEl) return;
    const workout = this.#workouts.find((w) => w.id === workoutEl.dataset.id);
    this.#map.setView(workout.coords, this.#zoomMap, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    workout.click();
  }

  _deleteItem(e) {
    e.stopPropagation();
    const trashBtn = e.target.closest(".button-trash");
    if (!trashBtn) return;
    const workEl = trashBtn.closest(".workout");
    const removedItemIndex = this.#workouts.findIndex(
      (w) => w.id === workEl.dataset.id
    );
    this.#workouts.splice(removedItemIndex, 1);
    this._setlocalStorage();
    //Update Ui
    workoutsHtml.innerHTML = "";
    this.#markers.forEach((marker) => {
      this.#map.removeLayer(marker);
    });
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
      this._renderMarker(work, work.coords);
    });
  }

  _editItem(e) {
    const edithBtn = e.target.closest(".button-edit");
    if (!edithBtn) return;
    const workElement = edithBtn.closest(".workout");
    console.log(workElement);
  }
}
const app = new App();
