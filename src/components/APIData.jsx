
import ColorData from '@site/src/api/Structs/Color.json';
import MatrixData from '@site/src/api/Structs/Matrix.json';
import RotatorData from '@site/src/api/Structs/Rotator.json';
import QuatData from '@site/src/api/Structs/Quat.json';
import VectorData from '@site/src/api/Structs/Vector.json';
import Vector2DData from '@site/src/api/Structs/Vector2D.json';



const APIData = {
	Stable: {
		Struct: {
			Color: ColorData,
			Matrix: MatrixData,
			Quat: QuatData,
			Rotator: RotatorData,
			Vector: VectorData,
			Vector2D: Vector2DData,
		}
	},
};

// Finds relations automatically
function FindsGetSetRelationsAutomatically(functions, table) {
	// TODO: This algorithm is O(n²) BOOM
	// Which doesn't matter as the page build is static, I guess
	for (const functionKey in functions) {
		let _function = functions[functionKey];

		const isGetter = _function.name.startsWith("Get")
		const isSetter = _function.name.startsWith("Set");

		if (isSetter || isGetter) {
			const otherName = _function.name.replace(isGetter ? 'G' : 'S', isGetter ? 'S' : 'G');

			for (const functionKey2 in functions) {
				let _function2 = functions[functionKey2];

				if (_function2.name == otherName) {
					if (!_function.relations)
						_function.relations = {};

					if (!_function.relations[table])
						_function.relations[table] = [];

					if (!_function.relations[table].includes(otherName))
						_function.relations[table].push(otherName);
				}
			}
		}
	}
}

// Sort and Process a Class
function ProcessClass(_class) {
	if (_class.functions) {
		_class.functions.sort((a, b) => { return a.name > b.name; });
		FindsGetSetRelationsAutomatically(_class.functions, "functions");
	}

	if (_class.static_functions) {
		_class.static_functions.sort((a, b) => { return a.name > b.name; });
		FindsGetSetRelationsAutomatically(_class.static_functions, "static_functions");
	}

	if (_class.events)
		_class.events.sort((a, b) => { return a.name > b.name; });
}

function SortClasses() {
	if (!ExecutionEnvironment.canUseDOM)
		return;

	// Process all Classes
	for (const versionKey in APIData) {
		// Class
		for (const classKey in APIData[versionKey].Class) {
			ProcessClass(APIData[versionKey].Class[classKey]);
		}

		// Static Class
		for (const staticClassKey in APIData[versionKey].StaticClass) {
			ProcessClass(APIData[versionKey].StaticClass[staticClassKey]);
		}
	}
}

SortClasses();

export default APIData;