export const useHelper = () => {
    const updateOrPush = (array, data, arrayKey = 'id', dataKey = 'id') => {
        const index = array.findIndex(arr => arr[arrayKey] === data[dataKey])

        if (index === -1) {
            array.push(data)
        } else {
            array[index] = data
        }
    }

    const phoneRule = (value) => { 
        if(/^([0-9\s\+]*)$/.test(value)){
            if(value.length === 13 && value.substr(0,4) == '+992'){
                return true;
            }
            if(value.length === 12 && value.substr(0,3) == '+93'){
                return true;
            }
        }

        return false;
    }


    return {
        updateOrPush, phoneRule
    }
}