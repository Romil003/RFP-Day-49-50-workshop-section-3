class Contact{
    get fullName(){
        return this._fullName;
    }

    set fullName(fullName)
    {
        let fullNameRegex = RegExp('^[A-Za-z\\s]+$')
        if(fullNameRegex.test(fullName))
        this._fullName = fullName;
        else
        throw 'Name is Invalid'
    }


    get address(){
        return this._address;
    }

    set address(address)
    {
        let words = address.split(" ");
        if(words.length>1){
            let addressRegex = RegExp('^[#.0-9a-zA-Z\s,-]+$');
            for(const word of words){
                if(!addressRegex.test(word))
                throw 'Address Invalid';
            }
            this._address = address;
        }
        else{
            throw 'Address Invalid';
        }
    }

    get city(){
        return this._city;
    }

    set city(city){
      this._city= city;
    }

    get state(){
        return this._state;
    }

    set state(state){
       this._state = state;
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{6,}$');
        if(zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw 'Zip Invalid';
        }
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone)
    {
        let phoneRegex1 = RegExp('^[1-9][0-9]{9}$');
        let phoneRegex2 = RegExp('^[0-9]{2}[1-9][0-9]{9}$');
        let phoneRegex3 = RegExp('^[+][0-9]{2}[1-9][0-9]{9}$');
        if(phoneRegex1.test(phone) || phoneRegex2.test(phone) || phoneRegex3.test(phone)) {
            this._phone = phone;
        } else {
            throw 'Phone Number is Invalid';
        }
    }

    toString()
    {
        return "Full Name = "+this._fullName+ ", Address = "+this.address+", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}