"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathVisitor = void 0;
const base_1 = require("./base");
const _1 = require(".");
class PathVisitor extends base_1.BaseVisitor {
    constructor() {
        super(...arguments);
        this.currentPath = [];
    }
    _visit(node) {
        this.currentPath.push(node);
        super._visit(node);
        this.currentPath.pop();
    }
    get currentNode() {
        return this.currentPath[this.currentPath.length - 1];
    }
    get currentParent() {
        if (this.currentPath.length == 1)
            return this.currentNode;
        return this.currentPath[this.currentPath.length - 2];
    }
    get cuerrentParentPath() {
        return this.currentPath.slice(0, this.currentPath.length - 1);
    }
    get currentGrandParentPath() {
        return this.currentPath.length < 3
            ? []
            : this.currentPath.slice(0, this.currentPath.length - 2);
    }
    cloneCurrentNode() {
        return _1.utils.cloneNode(this.currentNode);
    }
    replaceCurrentNode(node) {
        Object.getOwnPropertyNames(this.currentParent).forEach((name) => {
            //@ts-ignore
            const prop = this.currentParent[name];
            if (prop == this.currentNode) {
                //@ts-ignore
                this.currentParent[name] = node;
            }
        });
    }
}
exports.PathVisitor = PathVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLGlDQUFxQztBQUNyQyx3QkFBMEI7QUFFMUIsTUFBYSxXQUFZLFNBQVEsa0JBQVc7SUFBNUM7O1FBQ0UsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUF5QzNCLENBQUM7SUF2Q0MsTUFBTSxDQUFDLElBQVU7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sUUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVU7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5RCxZQUFZO1lBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixZQUFZO2dCQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUExQ0Qsa0NBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTm9kZSxcbn0gZnJvbSBcIi4uL2FzXCI7XG5cbmltcG9ydCB7IEJhc2VWaXNpdG9yIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgY2xhc3MgUGF0aFZpc2l0b3IgZXh0ZW5kcyBCYXNlVmlzaXRvciB7XG4gIGN1cnJlbnRQYXRoOiBOb2RlW10gPSBbXTtcblxuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFBhdGgucHVzaChub2RlKTtcbiAgICBzdXBlci5fdmlzaXQobm9kZSk7XG4gICAgdGhpcy5jdXJyZW50UGF0aC5wb3AoKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50Tm9kZSgpOiBOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGF0aFt0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYXJlbnQoKTogTm9kZSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgubGVuZ3RoID09IDEpIHJldHVybiB0aGlzLmN1cnJlbnROb2RlO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYXRoW3RoaXMuY3VycmVudFBhdGgubGVuZ3RoIC0gMl07XG4gIH1cblxuICBnZXQgY3VlcnJlbnRQYXJlbnRQYXRoKCk6IE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGguc2xpY2UoMCwgdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50R3JhbmRQYXJlbnRQYXRoKCk6IE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGgubGVuZ3RoIDwgM1xuICAgICAgPyBbXVxuICAgICAgOiB0aGlzLmN1cnJlbnRQYXRoLnNsaWNlKDAsIHRoaXMuY3VycmVudFBhdGgubGVuZ3RoIC0gMik7XG4gIH1cblxuICBjbG9uZUN1cnJlbnROb2RlKCk6IE5vZGUge1xuICAgIHJldHVybiB1dGlscy5jbG9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gIH1cblxuICByZXBsYWNlQ3VycmVudE5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuY3VycmVudFBhcmVudCkuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBjb25zdCBwcm9wID0gdGhpcy5jdXJyZW50UGFyZW50W25hbWVdO1xuICAgICAgaWYgKHByb3AgPT0gdGhpcy5jdXJyZW50Tm9kZSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jdXJyZW50UGFyZW50W25hbWVdID0gbm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19