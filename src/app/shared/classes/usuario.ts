export class Usuario {


  private _bio: string;
  private _birthday: string;
  private _gender: boolean;
  private _country: string;
  private _phone: number;
  private _fullnam: string;

    public get bio(): string {
        return this._bio;
    }

    public set bio(bio: string) {
        this._bio = bio;
    }

    public get birthday(): string {
        return this._birthday;
    }

    public set birthday(birthday: string) {
        this._birthday = birthday;
    }

    public get gender(): boolean {
        return this._gender;
    }

    public set gender(gender: boolean) {
        this._gender = gender;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

    public get phone(): number {
        return this._phone;
    }

    public set phone(phone: number) {
        this._phone = phone;
    }

    public get fullnam(): string {
        return this._fullnam;
    }

    public set fullnam(fullnam: string) {
        this._fullnam = fullnam;
    }





}
