class Utils {
    static init() {
        Number.prototype.square = function() {
            return this * this;
        }
    }
}